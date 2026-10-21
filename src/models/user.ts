import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/config";

export class User extends Model {}

User.init({
  id_user: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  id_store: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING(50),
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'users',
  timestamps: false 
});