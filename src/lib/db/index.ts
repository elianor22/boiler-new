import 'dotenv/config';

import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import * as schema from '@/drizzle/schema';

const client = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

const db = drizzle(client, {
  schema,
});

export default db;
