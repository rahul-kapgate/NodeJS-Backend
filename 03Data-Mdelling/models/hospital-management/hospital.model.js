import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    city : {
        type : String,
        required : true,
    },
    pincode : {
        type : String,
        reduired : true,
    },
    specializedIn : [
        {type : String} 
    ]
  },
  { timeseries: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema)