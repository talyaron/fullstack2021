import MessageModel from '../models/messageModel'

export const getMessages = async (req, res) => {
    try {
        // console.log(req.body);
        const allMessages = await MessageModel.find({})
        // console.log(allMessages)
        res.send({ allMessages, ok: true })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}