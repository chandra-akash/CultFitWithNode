const express = require( 'express' );
const router = express.Router();
const User = require( '../models/user.model' )


router.post( "", async function ( req, res )
{
    var flag = true
    const user = await User.find().lean().exec()
    //console.log(req.body)
    for ( let i = 0; i < user.length; i++ )
    {
        if ( user[ i ].userNumber == req.body.userNumber )
        {
            flag = false
        }
    }
    if ( flag == true )
    {
        const number = await User.create( req.body )
        res.render( "profile/profile.ejs", { number: number } )
    } else
    {
        //console.log("not created")
    }

} );

router.put( "/:id", async ( req, res ) =>
{
    console.log( req.body )
    const user = await User.findByIdAndUpdate( req.params.id ).lean().exec()
    console.log( 'user: ', user )
} )

module.exports = router;