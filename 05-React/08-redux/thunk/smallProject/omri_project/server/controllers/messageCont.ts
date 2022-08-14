import messageModel from "../models/messageModel";

export const addMessage = async (req, res) => {
    const { message } = req.body;
    try {
        if (!message) throw new Error('no massege');
        const newMessage = new messageModel({
            text: message
        });
        await newMessage.save();
    } catch (error) {
        console.error(error);
    }
}

export const deleteMessage = async (req, res) => {
    const { id } = req.body;
    console.log(id);
}

export const getMesaages = async (req, res) => {
    try {
        const messages = await messageModel.find({})
        // console.log(messages);
        res.send(messages);
    } catch (err) {
        console.error(err);
    }
}
