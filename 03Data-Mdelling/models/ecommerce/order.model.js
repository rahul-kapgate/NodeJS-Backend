import mongoose from "mongoose";
import { Product } from "./product.model";

const orderItemsSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    },
    quantity : {
        type : Number ,
        requried : true,
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice : {
        type : Number,
        required : true,
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
    },
    orderItems : {
       type : [orderItemsSchema]
    },
    address : {
        type : String ,
        requried : true,
    },
    status : {
        type : String,
        enum : ["PENDING","CANCELLED","DELIVERED"],
        default : "PENDING",
    }
},{timestamps : true})

export const Order = mongoose.model("Order", orderSchema )
