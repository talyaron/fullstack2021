//import { AnyARecord } from 'dns'
import User from '../model/userModel'

export const addUser = async (req, res) => {

    try {

        const { userName, email, password, url } = req.body

        //andrew - first i used find to check if the user registered in the past
        const userFind = await User.find({ email })

        //if no - it adds his name to mongo

        if (userFind.length > 0) {
            res.send('Already registered in the past, please log in')//needs to initiate pop up login
        } else if (userFind.length === 0) {

            //andrew - i added 20$ for starter
            const fund = 20;
            const artCollection = [];
            const newUser = new User({ userName, email, password, url, fund, artCollection })
            const users = await newUser.save()

            res.send({ ok: true, users })

        }

        if (!req.body) throw new Error("no req.body in app.post'/users/add-user'");

    } catch (error) {
        console.error(error.message);
        res.send({ error: error.message })

    }

}

export const adminGetUser = async (req, res) => {

    try {

        const { userInfo } = req.cookies;
        console.log(userInfo);
        

        if (userInfo && userInfo.role === 'admin') {
            const users = User.find({})
            res.send({ ok: true, users })
            return;
        }
        throw new Error("user is not allowed");

    } catch (error) {
        console.error(error.message);
        res.send({error: error.message})

    }

}

export const findUser = async (req, res) => {
    try {
        const { loginEmail, loginPassword } = req.query;
        if (!req.body) throw new Error("no req.body in app.post'/users/log-user'");

        const oldUser = await User.findOne({ email: loginEmail, password: loginPassword })

        if (oldUser) {
            // if (oldUser.password === loginPassword) {
            res.cookie('userInfo', { role: oldUser.role, userName: oldUser.userName, email: oldUser.email }, { maxAge: 500000 })
            res.send({ oldUser })
            return;
            //}
        }
        throw new Error("email or password are inncorect");



        // if (oldUser.length === 0) {
        //     res.send({ noUser: 'Wrong email/password' });
        // } else if (oldUser.length > 0) {
        //     res.cookie('userInfo', { role: oldUser.role, userName,  })
        //     res.send({ oldUser })
        // }

    } catch (error) {
        console.error(error.message);
        res.send({ error: error.message })
    }
}

export const updateUser = async (req, res) => {
    const { user } = req.body;
    await User.updateOne({ _id: user._id }, user);
}


export const addArtToUser = async (req, res) => {
    const { newArt, user } = req.body;
    const r = await User.updateOne(
        { _id: user._id }, { $push: { artCollection: newArt } }
    );
    console.log(r);
}

export const buyAndSell = async (req, res) => {
    const { buyerId, price, ownerId } = req.body;

    //?????? ???????? ???????? ???? ?????? ?????????? ??????????, ?????? ?????? ?????? 2 ?????????? 
    //???? ???????????? ?????????? ?????????? ???????????? ?????????? 
    console.log(ownerId, buyerId, price);

    const result = await User.updateOne({ _id: ownerId }, { $inc: { fund: price } })
    const result2 = await User.updateOne({ _id: buyerId }, { $inc: { fund: -price } })

    res.send({ ok: true })


}