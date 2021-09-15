const ordersCtrl = {};

const Order = require('../models/Order');

ordersCtrl.getOrders = async(req , res) => {
    const Orders = await Order.find();
    res.json(Orders);
}

ordersCtrl.postOrders = async(req , res) => {
    const { OrderNumber,Status,date,Customer,TaxesAmounts,
            TotalTaxes,TotalAmount,
            ListOfOrderItems} = req.body;

    const newOrder = new Order({
        OrderNumber:OrderNumber,
        Status:Status,
        date:date,
        Customer:Customer,
        TaxesAmounts:TaxesAmounts,
        TotalTaxes:TotalTaxes,
        TotalAmount:TotalAmount,
        ListOfOrderItems:ListOfOrderItems
    });

    newOrder.save();
    res.json({message:"Order saved"});
}


ordersCtrl.getOrder = async(req , res) => {
    const order = await Order.findById(req.params.id);
    res.json(order);
}

ordersCtrl.updateOrders = async(req , res) => {

    const { OrderNumber,Status,date,Customer,
            TaxesAmounts,TotalTaxes,TotalAmount,
            ListOfOrderItems} = req.body;

    await Order.findByIdAndUpdate(req.params.id,{
        OrderNumber,
        Status,
        date,
        Customer,
        TaxesAmounts,
        TotalTaxes,
        TotalAmount,
        ListOfOrderItems
    });
    
    res.json({message:"Oreder Updated"});
}

ordersCtrl.deleteOrders = async(req , res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.json({message:"Order Deleted"});
}

module.exports = ordersCtrl;