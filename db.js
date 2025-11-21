// lib/db.js
import pkg from 'pg';
const { Pool } = pkg;

let pool;

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required in env');
}

if (!global.__tinylink_pg_pool) {
  global.__tinylink_pg_pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
  });
}
pool = global.__tinylink_pg_pool;

export default {
  query: (text, params) => pool.query(text, params),
  pool
};
