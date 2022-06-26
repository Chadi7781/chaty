const mongoose = require('mongoose'); // interact with mongodb server


 exports.mongoConnection = mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true}).then(()=> {
        console.log("Database connection successfull!!")
    }).catch((err)=> {
        console.log(err.message);
        })


