import { pgTable } from 'drizzle-orm/pg-core';

import * as t from 'drizzle-orm/pg-core';

import { timestamps } from '@/lib/db/columns.helpers';
import { users } from './user';

export const post = pgTable('posts', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  userId: t
    .uuid('user_id')
    .notNull()
    .references(() => users.id),
  title: t.varchar('title', { length: 255 }).notNull(),
  content: t.text('content').notNull(),
  ...timestamps,
});
