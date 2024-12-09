import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    }
},{timeseries})

export const category = new mongoose.model("Category" , categorySchema)