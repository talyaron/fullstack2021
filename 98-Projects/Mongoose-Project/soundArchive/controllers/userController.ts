
import user from "../model/userModel";
import jwt from "jwt-simple";

const secret = process.env.JWT_SECRET

export const register = async (req, res) => {
    try {
        let { name, password } = req.body;
        const newUser = new user({ name: name, password: password })


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
        // const secret = "12345"
        const { name, password } = req.body;
        console.log(name, password);




        if (typeof name === "string" && typeof password === "string") {
            const user1 = await user.findOne({ name });

            if (user1) {


                if (user1.password === password) {
                    const payload = { name, id: user1._id, role: user1.role }
                    const token = jwt.encode(payload, secret);
                    res.cookie(
                        "userInfo",
                        token, { maxAge: 120000 }
                    )

                    res.send({ ok: true, login: true });
                    return;
                }
            }
            throw new Error("username or password are inncorect");

        }

        else {
            throw new Error("user name or password are missing or role is missing");
        }

    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
};

export async function getAllUsers(req, res) {
    try {
        console.log(req.cookies);
        const { userInfo } = req.cookies;
        const secret = "12345"
        const decode = jwt.decode(userInfo, secret)
        console.log(decode);
        if (decode && decode.role === "admin") {
            const user1 = await user.find({});
            res.send({ ok: true, user1 });
            return;
        }
        throw new Error("user is not allowed");
    } catch (error) {
        console.log("Error on getAllUsers:", error.message)
        res.send({ error: error.message })
        return
    }

}

