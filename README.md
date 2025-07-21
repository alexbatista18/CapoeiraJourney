# Portfólio de Capoeira

## Como rodar localmente

1. Instale as dependências:
   ```
   npm install
   ```
2. Copie o arquivo `.env.example` para `.env` e ajuste as variáveis se necessário.
3. Rode o projeto:
   ```
   npm run dev
   ```
4. Acesse em [http://localhost](http://localhost) (landing page na porta 80)

## Solução de problemas
- Se der erro de permissão na porta 80, rode como administrador ou altere a porta em `.env`.
- Certifique-se de que nenhuma outra aplicação está usando as portas configuradas.
- Para Windows, o uso de `cross-env` garante compatibilidade dos scripts.

## SEO
- O projeto já inclui meta tags, favicon, manifest, robots.txt e sitemap.xml.

## Observações
- Não há mais dependências do Replit ou banco de dados.
- O backend serve apenas dados em memória. 