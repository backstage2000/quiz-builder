import express from 'express';
import cors from 'cors';
import { client } from './config/database';
import './models/quiz.model';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from backend 🚀',
  });
});

client
  .authenticate()
  .then(async () => {
    console.log('Database connected');

    await client.sync({ alter: true }); // создаст таблицы
    console.log('Models synced');
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
