import { error } from 'console';
import { songs } from '../model/songsModel'

export const upload = async (req, res) => {
    try {
        let { band, album, song, genre, image } = req.body;
        const newSong = new songs({ band, album, song, genre, image })


        console.log(newSong)
        const result = await newSong.save()

        res.send({ result });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}

export const search = async (req, res) => {
    try {
        let { searchTerm } = req.query;
        //searchTerm in curly brackets - needs to be same name as in client side ev.target 
        const foundSearch = await songs.find({ album: searchTerm })


        console.log(searchTerm);

        console.log({ foundSearch })

        res.send({ searchTerm, foundSearch })

    } catch (error) {
        console.error(error)
        res.send({ error: error.message })

    }
}
