import UserModel from '../models/messageModel'

export const getUsers = async (req, res) => {
    const allUsers = await UserModel.find({})
 
    try {
        res.send({ allUsers, ok: true })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}