import express from 'express'
const port = 8000;
const app = express();
import bodyParser from 'body-parser';

import Connection from './config/mongoose.js'
import dotenv from 'dotenv';
import Routes from './routes/routes.js';
import cors from 'cors';
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

Connection(username, password);

app.listen(port, function (err) {
    if (err) {
        console.log('error in running the server', error);

    }
    console.log('Server is running on port:', port);
});
