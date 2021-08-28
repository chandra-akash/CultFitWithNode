const mongoose = require( 'mongoose' );

const userSchema = new mongoose.Schema( {
    userNumber: { type: Number },
    userName: { type: String },
    userGender: { type: String },
    userEmail: { type: String },
    userDOB: { type: Date },
    userWorkEmail: { type: String }
}, {
    versionKey: false
} );

const UserDetails = mongoose.model( "userDetails", userSchema );
module.exports = UserDetails;