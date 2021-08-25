const path = require( "path" );
const express = require( "express" );

const connect = require( "./configs/db" );

const homeController = require( "./controllers/home.controller" );
const storeController = require( "./controllers/store.controller" );
const careController = require( "./controllers/care.controller" );
const selectedController = require( "./controllers/selected.controller" );
const cardController = require( "./controllers/card.controller" );
const paymentController = require( "./controllers/payment.controller" );
const thankyouController = require( "./controllers/thankyou.controller" );
const profileController = require( "./controllers/profile.controller" );

const app = express();

app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( "/static", express.static( path.join( __dirname, "public" ) ) );

app.set( "views", path.join( __dirname, "views/" ) );
app.set( "view engine", "ejs" );

app.use( "/home", homeController );
app.use( "/store", storeController );
app.use( "/care", careController );
app.use( "/selectedItem", selectedController );
app.use( "/card", cardController );
app.use( "/payment", paymentController );
app.use( "/profile", profileController );
app.use( "/ThankYouPopUp", thankyouController );

app.listen( 3333, async () =>
{
  await connect();
  console.log( "Listening on port 3333:" );
} );
