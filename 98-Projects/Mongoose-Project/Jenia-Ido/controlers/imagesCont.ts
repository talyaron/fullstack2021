import Images from "../models/imagesModel";

export const getImages = async (req, res) => {
    try {
        const email = req.query.email;
        // console.log(email);
        const result = await Images.find({ email: email });

        res.send({ ok: true, result });

    }
    catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });

    }

}
export const addImages = async (req, res) => {
    try {
        const { email, password } = req.body;
        const newImgs = { email: email, password: password, profileUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }
        const userImgs = new Images(newImgs)
        const result = await userImgs.save()
        res.send({ result });
    }
    catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });

    }
}
export const updateProfilePiC = async (req, res) => {
    try {
        const { email, newImg } = req.body;
        console.log(email);
        console.log(newImg);
        
        const images = await Images.updateOne({ email: email }, { profileUrl: newImg });
        res.send({ images, ok: true });
    } catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });
    }
}
export const addPost= async (req,res)=>{
    try{
        const {email, url} = req.body;
       const result = await Images.updateOne({email:email},{$push: {url:url}})
       if(email){
           res.send({ok:true})
       }
       else throw new Error("err");
        
        
    }catch(err){
        console.error(err);
        res.send({ error: err.message, ok: false });
    }
}