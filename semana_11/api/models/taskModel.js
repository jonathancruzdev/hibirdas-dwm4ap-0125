import mongoose from "mongoose";

const Schema = mongoose.Schema;
const mySchema = new Schema({
    title: String,
    completed: Boolean,
    Created: Date
});

const Task = mongoose.model('tasks', mySchema );

export default Task;
