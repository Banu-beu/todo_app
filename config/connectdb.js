const { default: mongoose } = require("mongoose");

const pass="Banu1111"
const connectdb=async()=>{
    try {
        await mongoose.connect(`mongodb+srv://banu12345:${pass}@cluster.k97bech.mongodb.net/?appName=Cluster`)
        console.log('mongodb connected');
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports=connectdb
