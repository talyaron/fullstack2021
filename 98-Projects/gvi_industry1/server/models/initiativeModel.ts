import { Sector, StageSchema, FieldsOfKnowledgeSchema } from './userModel'
import mongoose from 'mongoose'

const NameSchema = new mongoose.Schema({
    first: String,
    last: String
});


export const MentorSchema = new mongoose.Schema({
    userId: String,
    name: NameSchema,
    image: String,

    fieldsOfKnowledge: {
        type: String,
        enum: FieldsOfKnowledgeSchema,
        default: FieldsOfKnowledgeSchema.UX,
    },
})

export const InitiativeSchema = new mongoose.Schema({
    ownerName: NameSchema,
    ownerUserId: String,
    companyName: String,
    image: String,
    sector: {
        type: String,
        enum: Sector,
        default: Sector.EDUCATION,
    },
    description: String,
    mentors: [MentorSchema],
    stage: {
        type: String,
        enum: StageSchema,
        default: StageSchema.FFF,
    },
    webSite: String,
    linkToOnePager: String,
    presentations:  String 

    /////initiative

})

const InitiativeModel = mongoose.model("initiatives", InitiativeSchema)
export default InitiativeModel
