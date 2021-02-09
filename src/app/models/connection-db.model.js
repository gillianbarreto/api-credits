require('dotenv').config();
import { Sequelize, DataTypes, QueryTypes } from 'sequelize';
import { DB } from '../../environment/environment'

const sequelize = new Sequelize(
  DB.NAME,
  DB.USER,
  DB.PASSWORD,
  {
    port: DB.PORT,
    host: DB.HOST,
    dialect: DB.DIALECT || 'mysql'
  });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export { sequelize, DataTypes, QueryTypes };
