import { User } from './models/user';
import populateDB from './populateInitial';
import mongoose from 'mongoose'

mongoose
    .connect(`${process.env.DB_URI ?? ''}`)
    .then(() => {
        console.log('Connected to MongoDB')
        populateDB();
    })
    .catch((err) => {
        console.log(err)
    })
