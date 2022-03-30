import Art from "../model/artModel";

export const addArtToUser = async (req, res) => {
  const { newArt, userId } = req.body;
  console.log(newArt, userId)
  try {
    //validation
    if (typeof userId !== "string")
      throw new Error("user Id is not a string");

    const newArtDB = new Art({ ...newArt, ownerId: userId });

    const r = await newArtDB.save();
    console.log(r);
    res.send({ result: r });
  } catch (err) {
    console.log(userId);
    console.error(`Error in ${err.message}`);
    res.send({ error: err.message });
  }
};

export const getMyArt = async (req, res) => {
  const { userId } = req.query;
  const r = await Art.find({ ownerId: userId });
  res.send(r);
}

export const putArtOnSale = async (req, res) => {
  const { price, artId } = req.body;
  const r = await Art.updateOne({_id: artId},{forSale: true, price: price});
  res.send(r)
}

export const cancelSale = async (req, res) => {
  const {artId} = req.body;
  const r = await Art.updateOne({_id: artId},{forSale: false, price: 0});
  res.send(r)
}