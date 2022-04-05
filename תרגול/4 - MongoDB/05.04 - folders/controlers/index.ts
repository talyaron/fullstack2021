import Text from '../models/index'

export function hendeSend(req, res) {
    res.send('hello')
}

export async function hendleSave(req, res) {
    const { text } = req.body
    console.log(text)

    try {
        const getnewtextfromclient = new Text({ text }) //creating new obj - Text=model = new=createing new
        const result = await getnewtextfromclient.save() //save the obj in DB

        res.send({ ok: true, result })
    } catch (error) {
        console.log(error)
    }
}

