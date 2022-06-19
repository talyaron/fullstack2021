import mongoose from 'mongoose';
const BlogSchema = new mongoose.Schema({ 
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    }
        },{

            timestamps:true,
        })
    
export const UserModel = mongoose.model('Blog', BlogSchema);
