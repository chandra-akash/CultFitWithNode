const mongoose = require( 'mongoose' );

const userFullSchema = new mongoose.Schema( {
    userName: { type: String },
    userGender: { type: String },
    userEmail: { type: String },
    userDOB: { type: Date },
    userWorkEmail: { type: String },
    numberId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userDetails',
        required:true
    }
}, {
    versionKey: false
} );

const UserFull = mongoose.model( "userFull", userFullSchema );
module.exports=UserFull;