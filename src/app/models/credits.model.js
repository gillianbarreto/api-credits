import { sequelize, DataTypes } from './connection-db.model';

export const Credits = sequelize.define(
  'Credits',
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
    updateAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

export const getCreditsByUser = async (idUser) => {
  return await Credits.findAll({ where: { idUser } });
}

export const getCreditsByUserAndStore = async (idUser, idStore) => {
  return await Credits.findAll({ where: { idUser, idStore } });
}

export const addCredits = async (idUser, data) => {
  try {
    let credits = await Credits.findOne({ where: { idUser, idStore: data.store } });
    if (!credits) {
      credits = await Credits.create({
        idUser,
        idStore: data.store,
        amount: data.amount,
        updateAt: new Date()
      });
      return credits;
    }

    credits.amount += data.amount;
    credits.updateAt = new Date();
    await credits.save();
    return credits;
  } catch (error) {
    throw Error(`Credits not updated. idUser: ${idUser} idStore: ${data.store}`);
  }
}
