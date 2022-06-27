import User from '../model/userModel'

export const register = async (req, res) => {
    try {

        const { username, password, samePassword } = req.body
        // console.log(req.body);

        const existUser = await User.findOne({ username })
        console.log(existUser);
        if (!existUser) {
            if (password === samePassword) {
                const newUser = new User({ username, password })
                await newUser.save();
                res.cookie(
                    "userInfo",
                    { newUser },
                    {}
                )
                res.send({ ok: true, newUser })
            }
            else {
                res.send({ ok: false, message: 'the password not the same' });
            }
        }
        else {
            res.send({ ok: false, message: 'user exist' })
        }



    } catch (error) {
        console.log(error.error);
        res.send({ error: error.message })

    }
}
export const logIn = async (req, res) => {
    try {

        const { username, password } = req.body

        const existUser = await User.findOne({ username })

        if (existUser) {
            if (existUser.password === password) {
                res.cookie(
                    username,
                    { existUser },
                    {}
                )
                res.send({ existUser , ok:true });
            }
        }
        else {
            res.send({ ok: false, message: "user doesn't exist you need to register" });
        }



    } catch (error) {
        console.log(error.error);
        res.send({ error: error.message })

    }
}