// A mock function to mimic making an async request for data
import axios from "axios";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {selectText,textAdd} from './textSlice';


export async function addText(text = []) {

  try {
    const { data } = await axios.post("api/textList/addText",{text});
    console.log(data)

    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}
export async function editText() {
  try {
    const { data } = await axios.post("/textList/editText");
    console.log(data)
    const {message} = data;
  
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}
  