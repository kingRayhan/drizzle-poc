import { pgTable, timestamp, uuid, varchar, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

const commonTimestampColumns = {
  updated_at: timestamp(),
  created_at: timestamp().defaultNow().notNull(),
  deleted_at: timestamp(),
};

//--------------------------------------------------------------------------------
// ------   Projects
//--------------------------------------------------------------------------------
export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar({ length: 255 }).notNull(),
  shortDescription: varchar({ length: 255 }),
  status: varchar({ enum: ["active", "inactive"] }).default("active"),
  ...commonTimestampColumns,
});
export type Project = typeof projects.$inferSelect;

export const tasks = pgTable("tasks", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar({ length: 255 }).notNull(),
  body: text(),
  projectId: uuid("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),
  ...commonTimestampColumns,
});
export type Task = typeof tasks.$inferSelect;

// relationships
export const projectRelations = relations(projects, ({ many }) => ({
  tasks: many(tasks),
}));
export const taskRelations = relations(tasks, ({ one }) => ({
  project: one(projects, {
    fields: [tasks.projectId],
    references: [projects.id],
  }),
}));
