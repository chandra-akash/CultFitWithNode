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
            flag = false;
            var oldUser = user[ i ];
        }
    }
    if ( flag == true )
    {
        const number = await User.create( req.body )
        res.render( "profile/profile.ejs", { number: number } )
    } else
    {
        res.render( "profile/oldUserProfile.ejs", { oldUser } )
    }

} );

router.get( "", async ( req, res ) =>
{
    console.log( req )
    const user = await User.findByIdAndUpdate( req.params.id, req.body, { new: true } ).lean().exec()
    console.log( 'user: ', user )
} )

module.exports = router;