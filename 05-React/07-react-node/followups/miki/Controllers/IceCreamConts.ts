import IceCream from '../Models/IceCreamModel'


export const getIceCream = async (req, res) => {

        const result = await IceCream.find({})
        res.send({ ok: true, result})

}