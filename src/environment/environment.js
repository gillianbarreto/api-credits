'use strict';
require('dotenv').config();

export const PORT = process.env.PORT || 3000;
export const BASE = process.env.BASE || '/api';

export const DB = {
  HOST: process.env.DATABASE_HOST,
  PORT: process.env.DATABASE_PORT,
  NAME: process.env.DATABASE_NAME,
  USER: process.env.DATABASE_USER,
  PASSWORD: process.env.DATABASE_PASS,
  DIALECT: process.env.DATABASE_DIALECT
}
