import MessageModel from '../models/messageModel'

export const getMessages = async (req, res) => {
    try {

        const allMessages = await MessageModel.find({})

        res.send({ allMessages, ok: true })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}