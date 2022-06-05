import User from '../models/UserModel'

export const getUsers = async (req, res) => {
    const allUsers = await User.find({})
    try {
        console.log(allUsers)
        res.send({ allUsers, ok: true })

    } catch (error) {
        console.log(error.error)
        res.send({ error: error.error })
    }
}

export const addUser = async (req, res) => {

    const userForm = req.body
    const addUser = await User.findOne({ username: userForm.username })

    if (userForm) {
        res.send('Already exists')

    } else {
        let newUser = new User(userForm)
        const result = await newUser.save()
        res.send({ result })
    }


}
