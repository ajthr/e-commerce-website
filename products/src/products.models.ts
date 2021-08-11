import * as mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    price: Number,
    msrp: Number,
    vendor: String,
    sizes: [{
        size: String,
        quantity: Number
    }],
    specifications: [{
        specification: String,
        value: String
    }],
    images: [{
        url: String
    }]
});

const Product = mongoose.model('Product', productSchema);

export default Product;
