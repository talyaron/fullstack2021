import axios from "axios";
export async function fetchImg() {
  try {
    const { data } = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log(data)
    const {message} = data;
  
    return message;
  } catch (error) {
    console.error(error);
    return false;
  }
}


