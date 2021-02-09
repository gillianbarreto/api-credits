import { sequelize, DataTypes } from './connection-db.model';

export const Store = sequelize.define(
  'Store',
  {
    idStore: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updateAt: DataTypes.DATE
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

export const getStoreById = async id => {
  return await Store.findByPk(id);
}
