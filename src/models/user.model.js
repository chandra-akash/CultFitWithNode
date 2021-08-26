const mongoose = require( 'mongoose' );

const userSchema = new mongoose.Schema( {
    userName: { type: String },
    userNumber: { type: Number, required: true },
    userGender: { type: String },
    userEmail: { type: String },
    userDOB: { type: Number },
    userWorkEmail: { type: String },
}, {
    versionKey: false
} );

const UserDetails = mongoose.model( "userDetails", userSchema );
module.exports = UserDetails;