const mongoose =require('mongoose');
const mongoURL="mongodb://localhost:27017/cloudnotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const connectToMongo =()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("connected to Mongo ")
    })
}
module.exports= connectToMongo;