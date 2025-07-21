import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import os from 'os';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  // Configuração de portas e host via variáveis de ambiente
  const frontendPort = parseInt(process.env.FRONTEND_PORT || '80', 10);
  const backendPort = parseInt(process.env.BACKEND_PORT || '5050', 10);
  const host = process.env.SERVER_HOST || '0.0.0.0';
  const domain = process.env.DOMAIN;

  server.listen({
    port: backendPort,
    host,
    reusePort: true,
  }, () => {
    const ifaces = os.networkInterfaces();
    let localIp = 'localhost';
    for (const dev in ifaces) {
      for (const details of ifaces[dev]!) {
        if (details.family === 'IPv4' && !details.internal) {
          localIp = details.address;
        }
      }
    }
    let logMsg = `\n---\nServidor iniciado!\n`;
    if (domain) logMsg += `Domínio: http://${domain}\n`;
    logMsg += `Local: http://localhost:${backendPort}\n`;
    logMsg += `Rede: http://${localIp}:${backendPort}\n---\n`;
    log(logMsg);
  });
})();
