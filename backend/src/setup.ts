import 'dotenv/config';
import { client } from './config/database';

import './models/Quiz';
import './models/Question';
import './models/Option';
import './models/associations';

client.sync({ force: true });
