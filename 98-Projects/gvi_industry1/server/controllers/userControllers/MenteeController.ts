import UserModel from "../../models/userModel";


export const getMentees = async (req, res) => {

    try {
        

        res.send({ ok: true });
    }
    catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });

    }

}
export const addMentees = async (req, res) => {

    try {
        

        res.send({ ok: true });
    }
    catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });

    }

}
