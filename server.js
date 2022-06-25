const express= require('express');

const cors = require('cors');

const mongoose = require('mongoose'); // interact with mongodb server



const app = express();



  
require('dotenv').config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true}).then(()=> {
        console.log("Database connection successfull!!")
    }).catch((err)=> {
        console.log(err.message);
        })


const server = app.listen(port, () => {
    console.log(`Server started on PORT ${port}`)
});