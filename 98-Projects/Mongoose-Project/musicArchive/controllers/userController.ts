
import user from "../model/userModel";


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
        const { name, password } = req.body;
        console.log(name, password);
        // const newUser = new user({ name: name, password: password })
        // console.log(newUser)
        // const result = await newUser.save()
        // const theSame = 'the user is logged in';
        // res.send({ result, theSame });
        // return

        if (typeof name === "string" && typeof password === "string") {
            const user1 = await user.findOne({ name });

            if (user1) {


                if (user1.password === password) {
                    res.cookie(
                        "userInfo",
                        { name, id: user1._id, role: user1.role },
                        { maxAge: 120000 }
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

        if (userInfo && userInfo.role === "admin") {
            const user1 = await user.find({name:"paul"});
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

