const mongoose = require( 'mongoose' );

const userSchema = new mongoose.Schema( {
    userNumber: { type: Number },
   
}, {
    versionKey: false
} );

const UserDetails = mongoose.model( "userDetails", userSchema );
module.exports = UserDetails;