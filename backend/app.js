const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const morgan = require('morgan');



app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());


app.use(morgan('tiny'));


app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.use("/pu/up", express.static(__dirname + "/pu/up"));
app.use("/xyz/abc", express.static(__dirname + "/xyz/abc"));
app.use("/faculty/fac", express.static(__dirname + "/faculty/fac"));
app.use("/downloads/down", express.static(__dirname + "/downloads/down"));

app.use(express.json());

require('dotenv/config')
const api = process.env.API_URL


// routers
const studentRouter = require('./routers/students');
const userRouter = require('./routers/user');
const albumRouter = require('./routers/albums');
const galleryRouter = require('./routers/gallery');
const noticeRouter = require('./routers/notice');
const facultyRouter = require('./routers/faculty');
const downloadsRouter = require('./routers/downloads');



app.use(`${api}/albums`, albumRouter);
app.use(`${api}/gallery`, galleryRouter);
app.use(`${api}/users`, userRouter);
app.use(`${api}/notice`, noticeRouter);
app.use(`${api}/faculty`, facultyRouter);
app.use(`${api}/downloads`, downloadsRouter);
// app.use(`${api}/students`, studentRouter);




const db = mongoose.connect('mongodb+srv://jatin:7905355614@qaupsc.muehwma.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

    dbname: 'QAupsc'
})
    .then(() => {
        console.log('database connection is ready')
    })
    .catch((err) => {
        console.log(err)
    })


// server

app.listen(3000, () => {
    console.log('server is running http://localhost:3000');
});



module.exports = db