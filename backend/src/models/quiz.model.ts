import { DataTypes, Model } from 'sequelize';
import { client } from '../config/database';

export class Quiz extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
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
