import axios from "axios";
import Text from "../models/textModel";

export async function addText(req,res) {
    try {
      const {text} = req.body;
      const newLine = new Text(text);
      const result = newLine.save()


      res.send({ ok:true ,result});
  }
  catch (err) {
      console.error(err);
      res.send({ error: err.message, ok: false })
  }
  }