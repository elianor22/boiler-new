import { pgTable, text, uuid } from 'drizzle-orm/pg-core';

import { post } from './posts';
import { users } from './user';
import { timestamps } from '@/lib/db/columns.helpers';

export const comment = pgTable('comments', {
  id: uuid('id').primaryKey().defaultRandom(),
  postId: uuid('post_id')
    .notNull()
    .references(() => post.id),
  userId: uuid('user_id')
    .notNull()
    .references(() => users.id),
  content: text('content').notNull(),
  ...timestamps,
});
