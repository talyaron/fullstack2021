import UserModelEX from "../models/userModelEX";

export const getMentors = async (req, res) => {

    try {
        const selectedUser = req.body
        console.log(req.body)
        const allMentors = await UserModelEX.find({ type: 'mentor' })
        const filterMentors = allMentors.filter((mentor) => mentor.sector === selectedUser.sector)
        res.send({ filterMentors, ok: true })

    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}
export const getUser = async (req, res) => {
    try {
        const user = await UserModelEX.findOne({ type: 'mentee' })
        res.send({ user })

    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }

}