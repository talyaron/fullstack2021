import UserModel from "../models/userModel";
import CompanyModel from "../models/companyModel";

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

export async function addUser(req, res){
    try {
        const {
            first,
            last,
            description,
            image,
            email,
            country,
            linkedInProfile,
            phone,
            password,
            profession,
            company
        } = req.body

        const newUser = new UserModel({
            name:{first, last},
            description,
            image,
            email,
            country,
            linkedInProfile,
            phone,
            password,
            profession
        })

        await newUser.save();
        res.send({ok:true});

    } catch (error) {
        console.error(error);
        res.send({ error: error.message })
    }
}

export async function addCompany(req, res){
    try {
        const {id, company} = req.body;
        const newCompany = new CompanyModel({
            id,
            company
        }) 

        await newCompany.save();
        res.send({ok:true});

    } catch (error) {
        console.error(error);
        res.send({ error: error.message })
    }
}
