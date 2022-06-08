import { error } from 'console';
import User from '../model/userModel'

// interface UserResiter{
//     username?:string,
//     password?:string
// }

export const register = async (req, res) => {
    try {

        const { username, password, samePassword } = req.body

        if (password && samePassword) {
            if (password === samePassword) {
                const existUser = await User.findOne({ username: username })
                console.log(existUser);
                
                if (username) {
                    if (password === existUser.password) {
                        res.send({alredyExisted:'username alredy existed'})
                    }
                    else{
                        const newUser = new User({username , password})
                    }
                }else{
                    throw new error('username is empty')
                }
            }
            else {
                res.send({ ok: false })
            }
        }else{
            throw new error('password or the second password is empty')
        }

    } catch (error) {
        console.log(error.error);
        res.send({ error: error.message })

    }
}