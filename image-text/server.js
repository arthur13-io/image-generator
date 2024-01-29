import * as dotenv from 'dotenv';
dotenv.config();
import { Configuration, OpenAIApi } from 'openai'; 

const configuration = new Configuration({ apiKey: process.env.OPPENAI }); // create a configuration object
const openai = new OpenAIApi(configuration); // create the API client

import express from 'express'; 
import cors from 'cors'; 

const app = express(); // create express app
app.use(cors()); // enable cors