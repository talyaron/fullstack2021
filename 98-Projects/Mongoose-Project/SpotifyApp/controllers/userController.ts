import User from "../model/userModel";
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
    try {
        let { name, password } = req.body;
        const hashpassword = await bcrypt.hash(password, 10)
        const newUser = new User({ name: name, password: hashpassword })
       

        console.log(newUser)
        const result = await newUser.save()

        res.send({ result });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
export const logIn = async (req, res) => {
    try {
        let { name, password } = req.body;
        const hashpassword = await bcrypt.hash(password, 10)
        const newUser = new User({ name: name, password: hashpassword })
        const candidate = await User.findOne({ name });
        console.log(candidate);
        if (candidate) {
            const samePass = await bcrypt.compare(password, candidate.password)
            const theSame='the user is logged in';
            res.send({theSame});
            return
        }

        console.log(newUser)
        const result = await newUser.save()

        res.send({ result });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}

