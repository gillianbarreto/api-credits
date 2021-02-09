import { sequelize, DataTypes } from './connection-db.model';

export const User = sequelize.define(
  'User',
  {
    idUser: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
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

export const getUserById = async (id) => {
  return await User.findByPk(id);
}

export const getUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
}
