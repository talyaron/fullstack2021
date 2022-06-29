import UserModel from '../models/UsersModel'

export const getUsers = async (req, res) => {
    const allUsers = await UserModel.find({})

    try {
        res.send({ allUsers, ok: true })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}


export const addUser = async (req, res) => {

    let userFormAll = req.body

    const foundUser: any = await UserModel.findOne({ email: userFormAll.email })

    if (foundUser) {
        res.send('Already exists')
        
    } else {
        let newUser = new UserModel(userFormAll)
        const result = await newUser.save()
        console.log(newUser)
        res.send(result)
    }
}



