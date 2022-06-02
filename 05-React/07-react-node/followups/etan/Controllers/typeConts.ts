import Type from "../Models/typeModel";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;

export const addType = async (req: any, res: any) => {
  try {
    const { newType } = await req.body;
    const isAType = await Type.findOne({ name: newType });
    if (isAType) throw new Error(`${newType} already exists`);
    if (!isAType) {
      const addedType = new Type({ name: newType });
      const newly = await addedType.save();
      res.send({ status: 200, newly });
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export const getIceCreamTypes = async (req: any, res: any) => {
  try {
    const iceCreamTypes = await Type.find();
    req.iceCreamTypes = iceCreamTypes;
    res.send({ status: 200, iceCreamTypes });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
