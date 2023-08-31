import mongoose from 'mongoose';
import  color  from 'colors';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connect to MongoDB database ${mongoose.connection.host}`.bgGreen.white);
    }catch(error){
        console.log(`MongoDB Error ${error}`.bgRed.white);
    }
};

export default connectDB;