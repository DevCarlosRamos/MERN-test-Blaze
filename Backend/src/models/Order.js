const {model, Schema} = require('mongoose');

const orderSchema = new Schema({
    OrderNumber: {
            type:Number,
            required:true   
        },
    Status : {
            type:String,
            required:true
        },
    date: {
        type:String,
        },
    Customer: {
            type:String,
            required:true
        },
    TaxesAmounts: {
            type:Number,
            required:true
        },
    TotalTaxes: {
            type:Number,
            required:true
        },
    TotalAmount: {
            type:Number,
            required:true
    },
    ListOfOrderItems: []
})

module.exports = model('Order',orderSchema);