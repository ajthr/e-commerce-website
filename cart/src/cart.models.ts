import * as mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
    userid: String,
    productid: String
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

export default CartItem;
