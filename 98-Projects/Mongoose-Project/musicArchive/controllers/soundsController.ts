import { sounds } from '../model/soundsModel'

export const upload = async (req, res) => {
    try {
        let { title, type, location, description, duration,file } = req.body;
        const newSong = new sounds({ title, type, location, description, duration,file })


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
        const foundSearch = await sounds.find({ title: searchTerm })


        console.log(searchTerm);

        console.log({ foundSearch })

        res.send({ searchTerm, foundSearch })

    } catch (error) {
        console.error(error)
        res.send({ error: error.message })

    }
}
