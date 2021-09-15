const productsCtrl = {};

const Product = require('../models/Product');

productsCtrl.getProducts = async (req , res) => {
    const Products = await Product.find();
    res.json(Products);
}

productsCtrl.createProducts = (req , res) => {
    const {Name,Category,UnitPrice,Active} = req.body;

    const newProduct = new Product({
        Name:Name,
        Category:Category,
        UnitPrice:UnitPrice,
        Active:Active
    });

    newProduct.save();
    res.json({message:"Product saved"});
}

productsCtrl.getProduct = async (req , res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
};

productsCtrl.updateProducts = async(req , res) => {
    const {Name,Category,UnitPrice,Active} = req.body;
    await Product.findByIdAndUpdate(req.params.id,{
        Name,
        Category,
        UnitPrice,
        Active
    });
    res.json({message:"Product Updated"});

}

productsCtrl.deleteProducts = async(req , res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({message:"Product Deleted"});
}

module.exports = productsCtrl;