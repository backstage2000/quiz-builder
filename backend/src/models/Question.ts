import { DataTypes, Model } from 'sequelize';
import { client } from '../config/database';

export class Question extends Model {
  declare id: number;
  declare text: string;
  declare type: 'single' | 'multiple' | 'text';
  declare quizId: number;
}

Question.init(
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
    type: {
      type: DataTypes.ENUM('single', 'multiple', 'text'),
      allowNull: false,
    },
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: client,
    tableName: 'questions',
    timestamps: true,
  },
);
