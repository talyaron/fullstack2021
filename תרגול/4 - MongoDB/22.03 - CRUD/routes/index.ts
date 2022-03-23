import { Router } from 'express';
const router = Router();

//COLORS
import color from 'colors'

// USERS
import { User } from '../model/user';

//PASS - BCRYPT
import bcrypt from 'bcrypt'


router.get('/get-users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send({ ok: true, users })

    } catch (err) {
        console.log(color.bgRed.black(err))
    }
})

router.post('/add-user', async (req, res) => {
    try {
        let { name, password } = req.body;

        const hashpassword = await bcrypt.hash(password, 10)

        const newUser = new User({ name, password: hashpassword })

        console.log(newUser)

        const user = await newUser.save();
        res.send({ user })
    } catch (err) {
        console.log(color.bgRed.black(err))
    }
})

router.delete('/delete-user', async (req, res) => {
    try {
        const { userId } = req.body;

        if (userId) {
            const users = await User.deleteOne({ _id: userId })
            res.send({ ok: true, users });
        } else {
            throw new Error("userId or role is missing");
        }

    } catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
})

router.patch("/update-user", async (req, res) => {
    try {
        const { userId, name } = req.body;
        console.log(userId, name)
        if (userId && name) {
            const users = await User.updateOne({ _id: userId }, { name: name })
            res.send({ ok: true, users });
        } else {
            throw new Error("userId or name is missing");
        }
    } catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
});

router.post('/login-user', async (req, res) => {
    try {
        const { name, password } = req.body

        const condidate = await User.findOne({ name })

        console.log(condidate)

        if (condidate) {
            const samePass = await bcrypt.compare(password, condidate.password)

            if (samePass) {
                const theSame = `The use is login`
                res.send({ theSame })
            } else {
                const notSame = `The pass not valid`
                res.send({ notSame })
            }

        }
    } catch (error) {

    }
})

module.exports = router;

