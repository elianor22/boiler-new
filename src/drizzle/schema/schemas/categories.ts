import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const category = pgTable('categories', {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 50 }).notNull().unique(),
});
