import * as dotenv from 'dotenv'; //get access to environment variables
dotenv.config();
import OpenAI from 'openai'; 

const openAi = new OpenAI({apiKey: process.env.openAI}) // create a configuration object; new way of doing things
import express from 'express';
import cors from 'cors'; 

const app = express(); // create express app
app.use(cors()); // enable cors
app.use(express.json()); // enable json parsing

//creating the endpoint
app.post('/dream', async (req, res) => {
    try {
        const prompt = req.body.prompt //get the prompt from the request
        const response = await openAi.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
        });
        console.log("response", response);
        const image = response.data[0].url; //get the image url from the response
        res.send({image}); //send the image url as a response
    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message || 'Something interesting happened');
    }
app.listen(8080, () => console.log('Make some cool art on http://localhost:8080'));