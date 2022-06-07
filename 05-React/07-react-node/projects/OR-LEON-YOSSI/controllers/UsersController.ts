import User from '../models/UsersModel'

export const getUsers = async (req, res) => {
    const allUsers = await User.find({})
 
    try {
        res.send({ allUsers, ok: true })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}

export const addUser = async (req, res) => {

    let userForm = req.body
    const userFound: any = await User.findOne({ username: userForm.username })

    if (userFound) {
        res.send('Already exists')
    } else {
        let newUser = new User(userForm)
        const result = await newUser.save()
        res.send({ result })
    }
}

export const getLoginUser = async (req, res) => {
    let loginUser = req.body
    const userFound = await User.find({ username: loginUser.username })
    console.log('userFound:' +userFound)
  
    if (userFound)
        if (userFound[0].Password === loginUser.Password) {
            res.send(userFound[0])
        } else {
            console.log('not logedin!')
            res.send("Password doesn't match")
        }

}
