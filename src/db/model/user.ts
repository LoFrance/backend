import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

export class UserModel extends Model {}

UserModel.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    handle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    registrationToken: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: 'User',
    timestamps: false,
  }
);
