const cloudinary = require('./uploads/cloudinary')
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
export const uploadFile = async (req, res) => {
    try {
        const {result} = req.body;
        const docLink = await cloudinary.uploader.upload(result,{
            folder:"docs",
          })

        await docLink;
        res.send({ok: true, docLink })
        
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}