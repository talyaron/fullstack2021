import { v2 as cloudinary } from "cloudinary";

const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

if(!cloud_name || !api_key || !api_secret) console.error('no keys for cloudinary in profileCont')

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key:process.env.API_KEY,
  api_secret:process.env.API_SECRET,
  secure: true,
});

module.exports = cloudinary