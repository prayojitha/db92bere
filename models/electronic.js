const mongoose = require("mongoose");
const electronicSchema = mongoose.Schema({
category: String,
item: String,
price: Number,
})
module.exports = mongoose.model("electronic", electronicSchema);