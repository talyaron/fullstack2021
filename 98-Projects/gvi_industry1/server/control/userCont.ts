import UserModelEX from "../models/userModelEX";

export const getMentors = async (req, res) => {
    const allMentors = await UserModelEX.find({ type: 'mentor' })


    try {
        res.send({ allMentors, ok: true })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}