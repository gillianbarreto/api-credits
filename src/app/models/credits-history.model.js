import { sequelize, DataTypes } from './connection-db.model';

export const CreditsHistory = sequelize.define(
  'CreditsHistory',
  {
    idUser: {
      type: DataTypes.BIGINT,
      primaryKey: true
    },
    idStore: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    amount: DataTypes.INTEGER,
    createAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

export const createCreditsHistory = async (idUser, data) => {
  let credits = await CreditsHistory.create({
    idUser,
    idStore: data.store,
    amount: data.amount,
    createAt: new Date()
  });
  return credits;
}
