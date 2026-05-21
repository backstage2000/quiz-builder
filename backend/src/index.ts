import 'dotenv/config';
import app from './app';
import { client } from './config/database';

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await client.authenticate();
    console.log('DB connected');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

start();
