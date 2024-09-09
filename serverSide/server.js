const express =  require('express');
const mongoose =  require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors')

mongoose.connect("mongodb+srv://kaushikashehan123:ACjPmIqQKUguUmG4@cluster0.kho1z.mongodb.net/")
.then(()=>console.log('Conected Successed')).catch(error=>console.log(error)); 

const app = express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin : 'http://localhost:5173/',
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials : true
    })
)