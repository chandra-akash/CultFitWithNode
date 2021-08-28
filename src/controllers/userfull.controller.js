const express = require( 'express' );
const router = express.Router();

const Userfull = require( '../models/userfull.model' )


router.post( "", async function ( req, res )
{

     const userfull = await Userfull.create( req.body )
     console.log( userfull )
} )

module.exports = router;