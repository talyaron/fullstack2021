import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.json());

mongoose.connect('mongodb+srv://Michael:rrrpos32.14!@cluster0.ctwuo.mongodb.net/tzofimSynagogue?retryWrites=true&w=majority');

const PrayerSchema = new mongoose.Schema({
    name: String,
    family: String,
    role: String,
    kids: Number,
    birth: Date
});

const Prayer = mongoose.model('newPrayer', PrayerSchema)

app.post('/add-prayer', async (req, res) => {

    try {
        const { name, family, role, kids, birth } = req.body

        const newPrayer = new Prayer({ name, family, role, kids, birth })
        const prayers = await newPrayer.save()

        res.send({ ok: true, prayers });

        if (!name || !family || !role || !kids || !birth) throw new Error("no name, family, role, kids, birth in app.post/add-prayer");

    } catch (error) {
        console.error(error.message);
        res.send({ error: error.message })

    }
});

app.get('/get-prayers', async (req, res) => {

    try {
        const prayers = await Prayer.find({})

        res.send({ ok: true, prayers })

    } catch (error) {
        console.error(error);
        res.send({ error: 'error in app.get/get-prayers' })

    }

})

app.get('/get-gabaim', async (req, res) => {

    try {
        const gabaim = await Prayer.find({ role: 'gabai' })
        res.send({ ok: true, gabaim })

    } catch (error) {
        console.error(error);
        res.send({ error: 'error in app.get/get-gabaim' })

    }
})

app.delete('/delete-prayer', async (req, res) => {

    try {
        const { id } = req.body
        const prayers = await Prayer.deleteOne({ _id: id })
        res.send({ ok: true, prayers })

        if (!id) throw new Error("no id in delete-prayer");

    } catch (error) {
        console.error(error.message);
        res.send({ error: error.message })

    }
})

app.patch('/update-gabaim', async (req, res) => {

    try {
        const { name, family, kids, birth, id } = req.body

        const gabaim = await Prayer.updateOne({ _id: id }, { name, family, kids, birth })
        
        res.send({ok:true, gabaim})

        if (!req.body) throw new Error("no req.body in app.patch/update-gabaim");
        

    } catch (error) {
        console.error(error.message);
        res.send({error: error.message})
        
    }
})


app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});


