import mongoose from 'mongoose';


const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    salary : {
        type : String,
        required : true
    },
    qulification : {
        type : String,
        required : true,
    },
    experienceceInYears : {
        type : Number,
        default : 0
    },
    workInHospitals : [
        {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hospital"}
    ]
    

},{timestamps : true})

export const Doctor = mongoose.model("Doctor",doctorSchema)


// Data modeling is the process of defining how data is Structured and orgnized in Database