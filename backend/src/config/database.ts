import { Sequelize } from 'sequelize';
import 'dotenv/config';

const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE, DB_PORT } = process.env;

if (!DB_HOST || !DB_USER || !DB_PASS || !DB_DATABASE || !DB_PORT) {
  throw new Error('Missing DB env variables');
}

export const client = new Sequelize({
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASS,
  database: DB_DATABASE,
  port: Number(DB_PORT),
  dialect: 'postgres',
});
