import Art from "../model/artModel";

export const addArtToUser = async (req, res) => {
  const { newArt, user } = req.body;
  console.log(newArt, user)
  try {
    //validation
    if (typeof user._id !== "string")
      throw new Error("user Id is not a string");

    const newArtDB = new Art({ ...newArt, ownerId: user._id });

    const r = await newArtDB.save();
    console.log(r);
    res.send({ result: r });
  } catch (err) {
    console.log(user);
    console.error(`Error in ${err.message}`);
    res.send({ error: err.message });
  }
};
