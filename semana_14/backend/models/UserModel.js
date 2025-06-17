import mongoose from "mongoose";

const Schema = mongoose.Schema;
const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    avatar: {
        type: String
    }
});

const User = mongoose.model('users', mySchema );

export default User;