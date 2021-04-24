const mongoose = require("mongoose");
const Validator = require("validator")
const electronicSchema =new  mongoose.Schema({
// category: String,
category: {
    type:String,
    lowercase: true,
    // enum:["Fred", "Barney"],
    minlength: [2,"minimum 2 letters"],
    maxlength: 10,
    required: true,
    errmsg: "minimum length should be 2",
    },
item: String,
price: {
    type:Number,
    min:[1, "too small"],
    max:25,

}
})
module.exports = mongoose.model("electronic", electronicSchema);

// const userSchema= new mongoose.Schema({
//     category: {
//         type:String,
//         lowercase: true,
//         enum:["Fred", "Barney"],
//         required:[true,l]
//         }
    // age: {
    //         type:Number,
    //         set: v => Math.floor(v), 
    //         default: 10,
    //         min:[1, "too small"]
    //         max:25,
    // }
// });