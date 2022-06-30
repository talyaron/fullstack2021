import MatchingModel from '../Models/matchingModel'

export const getMatches = async (req, res) => {
    // const searchInput =
    // const matchingRegex = new RegExp(`${searchInput}`, 'i')


    const matchings = await MatchingModel.find({});
    res.send({ matchings })
}

// { countries: { $regex: /rus/i } }