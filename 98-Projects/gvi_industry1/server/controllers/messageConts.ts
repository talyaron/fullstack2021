import MessageModel from '../models/messageModel'

export const getMessages = async (req, res) => {
    const allMessages = await MessageModel.find({})

    try {
        res.send({ allMessages, ok: true })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}