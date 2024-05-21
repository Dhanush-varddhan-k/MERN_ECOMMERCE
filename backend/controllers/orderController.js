const orderModel=require('../models/orderModel')
const productModel=require('../models/productModel')
//create order -/api/v1/order 
exports.createOrder = async(req, res, next) => {
    const cartItems=req.body;
    const amount=Number(cartItems.reduce((acc,item)=>(acc + item.product.price * item.qty),0)).toFixed(2);
    const status='pending';
    const order=await orderModel.create({cartItems, amount, status})

    //updating product stock
    cartItems.forEach(async(item) => {
        const product= await productModel.findById(item.product._id);
        product.stock=product.stock-item.qty;
        await product.save();
    });

    res.json(
        {
            success:true,
            order
        }
    )

}

//field name and variable name are i.e. in this file we namer as cartItems and in orderModel.js file also we named the same.
//if we name cart Items then inside orderModel.create we should type as cartItems: cart Items
//to avoid this double work we name the same