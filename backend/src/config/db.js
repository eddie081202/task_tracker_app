import 'dotenv/config'; 
import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('❌ Error acquiring client', err.stack);
  }
  console.log('✅ Database connected successfully!');
  release();
});

export default {
  query: (text, params) => pool.query(text, params),
};