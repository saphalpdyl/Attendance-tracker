import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: Number
    },
    coursesTaught: {
        type: Schema.Types.ObjectId,
        ref: "Course"
    },
    role : {
        type : Number,
        default : 0  //0-noraml(student) teacher-1 adim-2
    }
})

export const User = mongoose.model("User", userSchema);
export default User;