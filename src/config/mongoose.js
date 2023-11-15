import mongoose from "mongoose";
import 'dotenv/config'

export const connectToMongo = async () => {
    console.log(process.env.MONGO_URL)
    try {
        await mongoose.connect("mongodb+srv://amin:OGIHsLcKFk8ZuEXr@fullstack.9iqbxj4.mongodb.net/?retryWrites=true&w=majority")
        console.log('Successfully Connected to Mongo')
    } catch(err) {
        console.log(err)
    }
}

// process.env.MONGO_URL
// mongodb://127.0.0.1:27017/todo