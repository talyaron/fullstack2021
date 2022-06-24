import UserModel from '../models/userModel'

export const getRecipients = async (req, res) => {
    console.log(req.body);
    const allUsers = await UserModel.find({})
    console.log(allUsers);
    
    try {
        res.send({ allUsers, ok: true })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}