const {model, Schema} = require('mongoose');

const productSchema = new Schema({
    Name: {
            type:String,
            required:true   
        },
    Category: {
            type:String,
            required:true
        },
    UnitPrice: {
            type:Number,
            required:true
        },
    Active: {
            type:Boolean,
            required:true
        }
})

module.exports = model('Product',productSchema);