//going to have link with product based collection
const mongoose =require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    ratings: String,
    images:[
        {
            image:String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numOfReviews:String,
    createdAt:Date


});
//name of model should be in schema
const productModel=mongoose.model('Product',productSchema);
module.exports=productModel;