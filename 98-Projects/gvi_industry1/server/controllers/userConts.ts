import UserModel from '../models/userModel'

export async function getRecipients(req, res) {
    try {
    console.log(req.body, 'req.body from client');
    const allUsers = await UserModel.find({})
    console.log( 'const allUsers = await UserModel.find({}) returns:', allUsers);
    
        res.send({ allUsers, ok: true })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}