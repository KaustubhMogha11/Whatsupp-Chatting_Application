import express from 'express'
const port = 8000;
const app = express();

import Connection from './config/mongoose.js'
import dotenv from 'dotenv';;

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;




Connection(username, password);

app.listen(port, function (err) {
    if (err) {
        console.log('error in running the server', error);

    }
    console.log('Server is running on port:', port);
});
