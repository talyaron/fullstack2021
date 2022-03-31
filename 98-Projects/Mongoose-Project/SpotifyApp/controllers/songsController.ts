import songs from '../model/songsModel'

export const Upload = async (req, res) => {
    try {
        let { song, picture, genre, youtube } = req.body;
        const newSong = new songs({ song, picture, genre, youtube })
       

        console.log(newSong)
        const result = await newSong.save()

        res.send({ result });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}

