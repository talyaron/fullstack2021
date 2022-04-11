import { sounds } from '../model/soundsModel'
import { searches } from '../model/soundsModel'

export const upload = async (req, res) => {
    try {
        let { title, type, location, description, duration, file } = req.body;
        const newSong = new sounds({ title, type, location, description, duration, file })


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
        const { searchTerm } = req.query;
        const { searching } = req.query;

        //searchTerm in curly brackets - needs to be same name as in client side ev.target 
        const foundSearch = await sounds.find({ title: searchTerm })
        // const {hello} = searchTerm;
        // console.log(hello);
        // , type, location, description, duration, file 
        // const { hello} = req.body;
        const newSearch = new searches({ foundSearch: searching})
            console.log(newSearch)
        
        if (newSearch) {
           
            const result = await newSearch.save()

            console.log(searchTerm);

            console.log({ foundSearch })

            res.send({ searchTerm, foundSearch, result })
            return
        }


    } catch (error) {
        console.error(error)
        res.send({ error: error.message })

    }
}





