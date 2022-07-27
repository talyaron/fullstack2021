import MatchingModel from '../Models/matchingModel';
import UserModel from '../models/userModel';
export const getMatches = async (req, res) => {
    // const searchInput =
    // const matchingRegex = new RegExp(`${searchInput}`, 'i')


    const matchings = await MatchingModel.find({});
    res.send({ matchings })
}

export const searchMatches = async (req, res) => {
    // const searchInput =
    // const matchingRegex = new RegExp(`${searchInput}`, 'i')


    const matchings = await MatchingModel.find({});
    res.send({ matchings })
}

// { countries: { $regex: /rus/i } }

export const selectedAccording = async (req, res) => {
    try {
        if (!req.body) throw new Error('there is no a mantor')
        const { match } = req.body;
            
        const matchings = await UserModel.find({ sector: match.mentor});
        res.send({ ok: true, matchings })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}