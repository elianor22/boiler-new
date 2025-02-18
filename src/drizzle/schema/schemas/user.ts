import { pgTable } from 'drizzle-orm/pg-core';

import * as t from 'drizzle-orm/pg-core';

import { timestamps } from '@/lib/db/columns.helpers';

export const users = pgTable('users', {
  id: t.uuid().primaryKey().defaultRandom(),
  name: t.varchar({ length: 150 }),
  username: t.varchar({ length: 150 }),
  email: t.varchar({ length: 255 }),
  password: t.varchar({ length: 255 }),
  ...timestamps,
});
