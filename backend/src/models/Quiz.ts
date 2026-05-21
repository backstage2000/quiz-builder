import { DataTypes, Model, HasManyGetAssociationsMixin } from 'sequelize';
import { client } from '../config/database';
import { Question } from './Question';

export class Quiz extends Model {
  declare id: number;
  declare title: string;
  declare description: string;

  declare questions?: Question[];
  declare getQuestions: HasManyGetAssociationsMixin<Question>;
}

Quiz.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: client,
    tableName: 'quizzes',
    timestamps: true,
  },
);
