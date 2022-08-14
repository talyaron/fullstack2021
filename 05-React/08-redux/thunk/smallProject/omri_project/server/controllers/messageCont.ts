import messageModel from "../models/messageModel";

export const addMessage = async (req, res) => {
    const { messages } = req.body;
    try {
        if(!messages) throw new Error('no massege');
        const newMessage = new messageModel({
            text: message
        });
        await newMessage.save();
    } catch (error) {
        console.error(error);
    }
}

export const deleteMessage = async (req, res) =>{
    const {id} = req.body;
    console.log(id);
}
