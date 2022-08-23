import mongoose from "mongoose";
import User from "../model/User.js";

const Schema = mongoose.Schema;


const postSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: true
    },
    likes: {
        type: [String]
    },
    
},{timestamps:true});

export default mongoose.model("Post", postSchema);