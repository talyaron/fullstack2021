// import {Sector,Stage,FieldsOfKnowledge} from './userModel'
import mongoose from 'mongoose'

const NameSchema = new mongoose.Schema ({
    first: String,
    last: String
  });

  
const MenteeSchema = new mongoose.Schema({
    userId: String,
    name: NameSchema
})

export const InitiativeSchema = new mongoose.Schema({
    mentee: MenteeSchema,
    image: String,
   sector: {
        type: String,
        // enum: Sector,
    },
    title: String,
    description: String,
    mentors: [{
        userId: String,
        name: NameSchema,
        fieldsOfKnowledge: {
            type: String,
            // enum: FieldsOfKnowledge,
        },
    }],
    stage:{
        type:String,
        // enum:Stage,
    },
    WebSite:String,
    LinkToOnepager: String,
    Presntations: [{String}]

    /////initiative
    
})
const InitiativeModel = mongoose.model("initiatives",InitiativeSchema)

export default InitiativeModel
