import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const classes = pgTable("classes", {
  id: serial("id").primaryKey(),
  date: text("date").notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  location: text("location"),
  tags: text("tags").array(),
  type: text("type").notNull(), // 'theory', 'practice', 'mixed'
});

export const activities = pgTable("activities", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: text("date"),
  imageUrl: text("image_url"),
  category: text("category").notNull(), // 'practice', 'event', 'seminar'
});

export const seminars = pgTable("seminars", {
  id: serial("id").primaryKey(),
  groupNumber: integer("group_number").notNull(),
  topic: text("topic").notNull(),
  members: text("members").array(),
  description: text("description"),
});

export const reflections = pgTable("reflections", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertClassSchema = createInsertSchema(classes).omit({
  id: true,
});

export const insertActivitySchema = createInsertSchema(activities).omit({
  id: true,
});

export const insertSeminarSchema = createInsertSchema(seminars).omit({
  id: true,
});

export const insertReflectionSchema = createInsertSchema(reflections).omit({
  id: true,
  createdAt: true,
});

export type Class = typeof classes.$inferSelect;
export type Activity = typeof activities.$inferSelect;
export type Seminar = typeof seminars.$inferSelect;
export type Reflection = typeof reflections.$inferSelect;

export type InsertClass = z.infer<typeof insertClassSchema>;
export type InsertActivity = z.infer<typeof insertActivitySchema>;
export type InsertSeminar = z.infer<typeof insertSeminarSchema>;
export type InsertReflection = z.infer<typeof insertReflectionSchema>;
