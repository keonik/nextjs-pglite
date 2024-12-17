import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './db/migrations',
  schema: './db/schema',
  driver: 'pglite',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'idb://nextjs-pglite',
  },
});
