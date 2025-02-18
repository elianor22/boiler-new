import 'dotenv/config';

import { defineConfig } from 'drizzle-kit';

console.log(process.env.DATABASE_URL!);

export default defineConfig({
  out: './src/drizzle/migrations',
  dialect: 'postgresql',
  schema: './src/drizzle/schema/schemas',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    ssl: true,
  },
  migrations: {
    table: '_migrations',
    schema: 'public',
    prefix: 'timestamp',
  },
});
