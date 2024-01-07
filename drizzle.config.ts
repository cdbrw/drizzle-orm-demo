import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema/index.ts',
  out: './src/db/drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: String(process.env.DB_URL),
  },
  verbose: true,
  strict: true,
} satisfies Config;