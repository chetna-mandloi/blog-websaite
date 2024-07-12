const mongoose = require("mongoose")
exports.connectDb = async() =>{
    try{
 mongoose.connect("mongodb://127.0.0.1:27017/")
 console.log("database conneted");  

} catch(error){
    console.log(error);
}

}
