import UserModel from "../models/userModel";
export async function getUser(req, res) {
  try {
    const result = await UserModel.find({});
    res.send({ ok: true, result });
    console.log(result);
    // console.log(data);
  } catch (err) {
    console.error(err);
    res.send({ error: err.message, ok: false });
  }
}
export async function postUser(req, res) {
  try {
    const {name,
        description,
        image,
        email,
        country,
        lastEntry,
        companies,
        linkedInProfile,
        phone,
        initiatives,
        password,
        type,
        fieldsOfKnowledge,
        sectors,
        profession,
      
    } = req.body;
    
  } catch (error) {
    console.error(error);
  }
}
