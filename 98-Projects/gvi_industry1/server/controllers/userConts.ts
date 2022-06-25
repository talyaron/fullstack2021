import User from '../models/userModel'

export async function getAllRecipients(req, res) {
    try {
    // console.log(req.body, 'req.body from client');
    const allUsers = await User.find({})
    // console.log( 'const allUsers = await User.find({}) returns:', allUsers);
    if(!allUsers) throw new Error('no Users were found')
        res.send({ allUsers, ok: true })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}