import mongoose from "mongoose";
<<<<<<< HEAD
const BlogsSchema = new mongoose.Schema({title:'string', article:'string'});
export const BlogModel = mongoose.model('blogs',BlogsSchema);
=======

const BlogsSchema = new mongoose.Schema(
    {
        title: 'string',
        article: 'string'
    });

export const BlogModel = mongoose.model('blogs', BlogsSchema);
>>>>>>> ff8b15d12412b6de4f9fca06ce18ada593ef5e03
