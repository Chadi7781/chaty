const express= require('express');

const cors = require('cors');




const app = express();


  
require('dotenv').config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());


require('./server/config/db')


const server = app.listen(port, () => {
    console.log(`Server started on PORT ${port}`)
});