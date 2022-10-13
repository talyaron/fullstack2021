import messageModel from "../models/messageModel";

export const addMessage = async (req, res) => {
    const { message } = req.body;
    try {
        if (!message) throw new Error('no massege');
        const newMessage = new messageModel({
            text: message
        });
        const result = await newMessage.save();
    } catch (error) {
        console.error(error);
    }
}

export const deleteMessage = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) throw new Error('didnt get id');
        const deleletText = await messageModel.deleteOne({ _id: id });
        // const mesaages = await messageModel.find({})
    } catch (error) {
        console.error(error);
    }

}

export const getMesaages = async (req, res) => {
    try {
        const messages = await messageModel.find({})
        if (messages.length === 0) throw new Error('no messages');
        res.send(messages);
    } catch (err) {
        console.error(err);
    }
}
