import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/user.model.js';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

const app = express()

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO)
.then(
    () =>{console.log('MongoDb is connected')},
).catch((err)=>{
    console.log(err);
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})