const express = require( 'express' );
const router = express.Router();
const User = require( '../models/user.model' )

// ading new user number
router.post( "", async function ( req, res ){
    var flag = true
    // console.log(req.body)
    const user = await User.find().lean().exec()
    for ( let i = 0; i < user.length; i++ ){
        if ( user[ i ].userNumber == req.body.userNumber ){
            flag = false
        }
    }
    if ( flag == true ){
        const number = await User.create( req.body )
        res.render( "profile/profile.ejs", { number: number } )
    }else {
        res.send("your number");
    }
} );


router.post("/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    console.log("id",req.params.id);
    console.log("body",req.body);
   console.log("user",user);
   res.send("your profile")
} )


module.exports = router;