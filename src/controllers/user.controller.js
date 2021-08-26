const express = require( 'express' );
const router = express.Router();
const User = require( '../models/user.model' )

router.post( "", async function ( req, res )
{
    const user = await User.create( req.body );

    return res.send( user );
} );

module.exports = router;