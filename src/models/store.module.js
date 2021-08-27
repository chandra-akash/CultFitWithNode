const mongoose = require( 'mongoose' );

const storeSchema = new mongoose.Schema( {
    name: { type: String },
    cprice: { type: Number },
    discount: { type: String },
    id: { type: String },
    title: { type: String },
    price: { type: Number },
    image: { type: String },
}, {
    versionKey: false
} );

const Store = mongoose.model( "store", storeSchema );
module.exports = Store;