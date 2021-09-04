import express from 'express'
const port = 8000;
const app = express();
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// import Connection from './config/mongoose.js'
import dotenv from 'dotenv';
import Routes from './routes/routes.js';
import cors from 'cors';
import  dbConfig from './config/mongoose.js'


// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

// Connection(username, password);

app.listen(port, function (err) {
    if (err) {
        console.log('error in running the server', error);

    }
    console.log('Server is running on port:', port);
});
