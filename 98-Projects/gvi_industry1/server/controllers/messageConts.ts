import MessageModel from '../models/messageModel'

export const getMessages = async (req, res) => {
    try {
        const {sender} = req.body;
        let allMessages = await MessageModel.find({})
        allMessages = allMessages.filter(message => {return message.sender.userId=== sender.userId || message.recipient.userId === sender.userId})
        res.send({ allMessages, ok: true })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}