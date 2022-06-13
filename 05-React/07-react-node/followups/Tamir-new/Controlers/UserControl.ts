import { UserModel } from "../Models/UserModel";
export async function getUser(req, res) {
  try {
    console.log('hy');
    

    
  } catch (error) {
    res.senr({ error: error.message });
  }
}
