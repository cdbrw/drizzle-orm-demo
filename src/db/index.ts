import { Pool } from 'pg';
import { NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres';

import * as schema from './schema';

if (
  !process.env.DB_HOST ||
  !process.env.DB_NAME ||
  !process.env.DB_USER ||
  !process.env.DB_PASSWORD
) {
  throw new Error('Database credentials missing.');
}

const pool = new Pool({
  port: 5432,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

export const db: NodePgDatabase<typeof schema> = drizzle(pool, { schema });