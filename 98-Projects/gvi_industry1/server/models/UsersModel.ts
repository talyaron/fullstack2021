import mongoose from "mongoose";
// interface Name {
//     first: string;
//     last: string;
//   }

// export enum FieldsOfKnowledge {
//   UX = "ux",
//   BUSINESS_DEVELOPMENT = "devlopment",
// }

export enum Stage {
    FFF = "friends and family",
    PRE_SEED = "pre-seed",
    SEED = "seed",
    ROUND_A = "round a",
    ROUND_ABOVE = "round b and above",
}


// export enum UserType {
//   ADMIN = "admin",
//   MENTEE = "mentee",
//   MENTOR = "mentor",
// }
export const NameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
})
export enum Sector {
    EDUCATION = "eduction",
    DIGITAL_HEALTH = "digital health",
}


const UserSchema = new mongoose.Schema({

    name: NameSchema,
    // image: File,
    email: String,
    phone: Number,
    linkedInProfile: String,
    country: String,
    companyName: String,
    website: String,
    presentations: String,
    linkToOnePager: String,
    description: String,
    // lastEntry: Date,
    // password: String,
    //   type: {
    //     type: String,
    //     enum: UserType,
    //   },
    //   fieldsOfKnowledge: {
    //     type: String,
    //     enum: FieldsOfKnowledge,
    //   },
    sectors: {
        type: String,
        enum: Sector,
    },
    stage: {
        type: String,
        enum: Stage,
    }
});

const UserModel = mongoose.model('users', UserSchema);
export default UserModel;


// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema({
//     firstName:String,
//     lastName:String,
//     email:String,
//     phone:String,
//     Linkedin:String,
//     country:String,
//     companyName:String,
//     website:String,
//     link:String,

// })

// const User = mongoose.model('users', UserSchema)

// export default User
