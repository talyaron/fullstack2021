import songs from '../model/songsModel'

export const Search = async (req, res) => {
    try {
        let {song} = req.query.searchTerm;
        const newSearch = new songs({song})
        console.log(newSearch);
        const result = await newSearch.save()

        res.send({result});
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}