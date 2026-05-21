import { DataTypes, Model } from 'sequelize';
import { client } from '../config/database';

export class Option extends Model {
  declare id: number;
  declare text: string;
  declare isCorrect: boolean;
  declare questionId: number;
}

Option.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: client,
    tableName: 'options',
    timestamps: true,
  },
);
