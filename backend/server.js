import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import userRouter from './routes/userRoute.js';
import postRouter from './routes/postRoute.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/post', postRouter);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connected and listening on port 4000");
    });
})
.catch((error) => {
    throw(error);
});