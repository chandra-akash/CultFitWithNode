var body = document.getElementById( "body" )

// Mute/Unmute Button functions
var mute = 0;
function muteUnmute ()
{
    mute++;
    var video = document.getElementById( "muteUnmute" );
    if ( mute % 2 != 0 )
    {
        document.getElementById( "volumeBtn" ).src = "https://static.cure.fit/assets/images/volume-up-outline.svg";
        video.muted = false;
    } else
    {
        document.getElementById( "volumeBtn" ).src = "https://static.cure.fit/assets/images/volume-off-outline.svg";
        video.muted = true;
    }
}


//Pop Up Div
// Get the modal
var popUpDiv = document.getElementById( "popUpDiv" );
// Get the button that opens the popUpDiv
var btn = document.getElementById( "popUpBtn" );
// Get the <span> element that closes the popUpDiv
var span = document.getElementsByClassName( "close" )[ 0 ];
// When the user clicks the button, open the popUpDiv 
btn.onclick = function ()
{
    popUpDiv.style.display = "block";
}
// When the user clicks on <span> (x), close the popUpDiv
span.onclick = function ()
{
    popUpDiv.style.display = "none";
}
// When the user clicks anywhere outside of the popUpDiv, close it
window.onclick = function ( event )
{
    if ( event.target == popUpDiv )
    {
        popUpDiv.style.display = "none";
    }
}

// pop up location
var count = 0;
var trigger = document.getElementById("location");
var modelRapper = document.getElementById("model_wrapper");

trigger.addEventListener("click", function () {
    count++;
    if (count % 2 == 1) {
        modelRapper.classList.add("active");
    } else if (count % 2 == 0) {
     modelRapper.classList.remove("active");   
    }
})

modelRapper.addEventListener("click", function (e) {
    if (e.target !== this) return
    modelRapper.classList.remove("active");
    count++;
})



function set1() {
    let set = document.getElementById("set1");
    trigger.innerText = set.innerText;
}
function set2() {
    let set = document.getElementById("set2");
    trigger.innerText = set.innerText;
}
function set3() {
    let set = document.getElementById("set3");
    trigger.innerText = set.innerText;
}
function set4() {
    let set = document.getElementById("set4");
    trigger.innerText = set.innerText;
}
function set5() {
    let set = document.getElementById("set5");
    trigger.innerText = set.innerText;
}
function set6() {
    let set = document.getElementById("set6");
    trigger.innerText = set.innerText;
}
function set7() {
    let set = document.getElementById("set7");
    trigger.innerText = set.innerText;
}

function set8() {
    let set = document.getElementById("set8");
    trigger.innerText = set.innerText;
}
function set9() {
    let set = document.getElementById("set9");
    trigger.innerText = set.innerText;
}

function set10() {
    let set = document.getElementById("set10");
    trigger.innerText = set.innerText;
}
function set11() {
    let set = document.getElementById("set11");
    trigger.innerText = set.innerText;
}
function set12() {
    let set = document.getElementById("set12");
    trigger.innerText = set.innerText;
}
function set13() {
    let set = document.getElementById("set13");
    trigger.innerText = set.innerText;
}
function set14() {
    let set = document.getElementById("set14");
    trigger.innerText = set.innerText;
}
function set15() {
    let set = document.getElementById("set15");
    trigger.innerText = set.innerText;
}
function set16() {
    let set = document.getElementById("set16");
    trigger.innerText = set.innerText;
}
function set17() {
    let set = document.getElementById("set17");
    trigger.innerText = set.innerText;
}

function set18() {
    let set = document.getElementById("set18");
    trigger.innerText = set.innerText;
}
function set19() {
    let set = document.getElementById("set19");
    trigger.innerText = set.innerText;
}

function set20() {
    let set = document.getElementById("set20");
    trigger.innerText = set.innerText;
}




// valid phone number length checker
function validNumber ()
{
    var num = document.getElementById( "mobNum" ).value;
    if ( num.length == 9 )
    {

        document.getElementById( "continueBtn" ).style.backgroundImage = " linear-gradient(101deg, rgb( 247, 69, 48 ), rgb( 255, 46, 115 ))";
        document.getElementById( "continueBtn" ).style.boxShadow = " rgb(247 123 155 / 71%) 0px 3px 16px 0px";
    } else
    {
        document.getElementById( "continueBtn" ).style.backgroundImage = " linear-gradient(99deg, rgb(202, 202, 202), rgb(199, 199, 199))";
        document.getElementById( "continueBtn" ).style.boxShadow = " none";
    }
}

validNumber();



// div: Cult animations
function increaseA1 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a1" ).style.width = "60%";
        document.getElementById( "a1" ).style.cursor = "pointer";
        document.getElementById( "b1" ).style.width = "20%";
        document.getElementById( "c1" ).style.width = "20%";
        document.getElementById( "textContent1" ).style.display = "block";
        document.getElementById( "textContent2" ).style.display = "none";
        document.getElementById( "textContent3" ).style.display = "none";
    }, 300 );
}
function increaseB1 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a1" ).style.width = "20%";
        document.getElementById( "b1" ).style.width = "60%";
        document.getElementById( "b1" ).style.cursor = "pointer";
        document.getElementById( "c1" ).style.width = "20%";
        document.getElementById( "textContent1" ).style.display = "none";
        document.getElementById( "textContent2" ).style.display = "block";
        document.getElementById( "textContent3" ).style.display = "none";
    }, 300 );
}
function increaseC1 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a1" ).style.width = "20%";
        document.getElementById( "b1" ).style.width = "20%";
        document.getElementById( "c1" ).style.width = "60%";
        document.getElementById( "c1" ).style.cursor = "pointer";
        document.getElementById( "textContent1" ).style.display = "none";
        document.getElementById( "textContent2" ).style.display = "none";
        document.getElementById( "textContent3" ).style.display = "block";
    }, 300 )
}

// div: Care animations
function increaseA2 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a2" ).style.width = "60%";
        document.getElementById( "a2" ).style.cursor = "pointer";
        document.getElementById( "b2" ).style.width = "20%";
        document.getElementById( "c2" ).style.width = "20%";
        document.getElementById( "textContent4" ).style.display = "block";
        document.getElementById( "textContent5" ).style.display = "none";
        document.getElementById( "textContent6" ).style.display = "none";
    }, 300 );
}
function increaseB2 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a2" ).style.width = "20%";
        document.getElementById( "b2" ).style.width = "60%";
        document.getElementById( "b2" ).style.cursor = "pointer";
        document.getElementById( "c2" ).style.width = "20%";
        document.getElementById( "textContent4" ).style.display = "none";
        document.getElementById( "textContent5" ).style.display = "block";
        document.getElementById( "textContent6" ).style.display = "none";
    }, 300 );
}
function increaseC2 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a2" ).style.width = "20%";
        document.getElementById( "b2" ).style.width = "20%";
        document.getElementById( "c2" ).style.width = "60%";
        document.getElementById( "c2" ).style.cursor = "pointer";
        document.getElementById( "textContent4" ).style.display = "none";
        document.getElementById( "textContent5" ).style.display = "none";
        document.getElementById( "textContent6" ).style.display = "block";
    }, 300 )
}

// div: Mind animations
function increaseA3 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a3" ).style.width = "60%";
        document.getElementById( "a3" ).style.cursor = "pointer";
        document.getElementById( "b3" ).style.width = "20%";
        document.getElementById( "c3" ).style.width = "20%";
        document.getElementById( "textContent7" ).style.display = "block";
        document.getElementById( "textContent8" ).style.display = "none";
        document.getElementById( "textContent9" ).style.display = "none";
    }, 300 );
}
function increaseB3 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a3" ).style.width = "20%";
        document.getElementById( "b3" ).style.width = "60%";
        document.getElementById( "b3" ).style.cursor = "pointer";
        document.getElementById( "c3" ).style.width = "20%";
        document.getElementById( "textContent7" ).style.display = "none";
        document.getElementById( "textContent8" ).style.display = "block";
        document.getElementById( "textContent9" ).style.display = "none";
    }, 300 );
}
function increaseC3 ()
{
    setTimeout( function ()
    {
        document.getElementById( "a3" ).style.width = "20%";
        document.getElementById( "b3" ).style.width = "20%";
        document.getElementById( "c3" ).style.width = "60%";
        document.getElementById( "c3" ).style.cursor = "pointer";
        document.getElementById( "textContent7" ).style.display = "none";
        document.getElementById( "textContent8" ).style.display = "none";
        document.getElementById( "textContent9" ).style.display = "block";
    }, 300 )
}


// going to cult

function goToCult ()
{

    window.location.href = "care/care.html";

}

function goingToStorePage ()
{
    window.location.href = "http://localhost:3333/store";
}

function cart ()
{

    window.location.href = "card/card.html";

}

function goToProfile ()
{

    let number = document.getElementById( "mobNum" ).value;
    console.log( number );

    if ( number.length == 10 )
    {
        window.location.href = "profile/profile.html";
    } else
    {
        alert( "enter valid Number" );
    }

}


function myFunction ( x )
{
    if ( x.matches )
    {
        // div: Cult animations
        function increaseA1 ()
        {
            setTimeout( function ()
            {
                document.getElementById( "a1" ).style.height = "100%";
                document.getElementById( "a1" ).style.cursor = "pointer";
                document.getElementById( "b1" ).style.height = "50%";
                document.getElementById( "c1" ).style.height = "50%";
                document.getElementById( "textContent1" ).style.display = "block";
                document.getElementById( "textContent2" ).style.display = "none";
                document.getElementById( "textContent3" ).style.display = "none";
            }, 300 );
        }
        function increaseB1 ()
        {
            setTimeout( function ()
            {
                document.getElementById( "a1" ).style.height = "50%";
                document.getElementById( "b1" ).style.height = "100%";
                document.getElementById( "b1" ).style.cursor = "pointer";
                document.getElementById( "c1" ).style.height = "50%";
                document.getElementById( "textContent1" ).style.display = "none";
                document.getElementById( "textContent2" ).style.display = "block";
                document.getElementById( "textContent3" ).style.display = "none";
            }, 300 );
        }
        function increaseC1 ()
        {
            setTimeout( function ()
            {
                document.getElementById( "a1" ).style.height = "50%";
                document.getElementById( "b1" ).style.height = "50%";
                document.getElementById( "c1" ).style.height = "100%";
                document.getElementById( "c1" ).style.cursor = "pointer";
                document.getElementById( "textContent1" ).style.display = "none";
                document.getElementById( "textContent2" ).style.display = "none";
                document.getElementById( "textContent3" ).style.display = "block";
            }, 300 )
        }

        // div: Care animations
        function increaseA2 ()
        {
            setTimeout( function ()
            {
                document.getElementById( "a2" ).style.height = "100%";
                document.getElementById( "a2" ).style.cursor = "pointer";
                document.getElementById( "b2" ).style.height = "50%";
                document.getElementById( "c2" ).style.height = "50%";
                document.getElementById( "textContent4" ).style.display = "block";
                document.getElementById( "textContent5" ).style.display = "none";
                document.getElementById( "textContent6" ).style.display = "none";
            }, 300 );
        }
        function increaseB2 ()
        {
            setTimeout( function ()
            {
                document.getElementById( "a2" ).style.height = "50%";
                document.getElementById( "b2" ).style.height = "100%";
                document.getElementById( "b2" ).style.cursor = "pointer";
                document.getElementById( "c2" ).style.height = "50%";
                document.getElementById( "textContent4" ).style.display = "none";
                document.getElementById( "textContent5" ).style.display = "block";
                document.getElementById( "textContent6" ).style.display = "none";
            }, 300 );
        }
        function increaseC2 ()
        {
            setTimeout( function ()
            {
                document.getElementById( "a2" ).style.height = "50%";
                document.getElementById( "b2" ).style.height = "50%";
                document.getElementById( "c2" ).style.height = "100%";
                document.getElementById( "c2" ).style.cursor = "pointer";
                document.getElementById( "textContent4" ).style.display = "none";
                document.getElementById( "textContent5" ).style.display = "none";
                document.getElementById( "textContent6" ).style.display = "block";
            }, 300 )
        }

        // div: Mind animations
        function increaseA3 ()
        {
            setTimeout( function ()
            {
                document.getElementById( "a3" ).style.height = "100%";
                document.getElementById( "a3" ).style.cursor = "pointer";
                document.getElementById( "b3" ).style.height = "50%";
                document.getElementById( "c3" ).style.height = "50%";
                document.getElementById( "textContent7" ).style.display = "block";
                document.getElementById( "textContent8" ).style.display = "none";
                document.getElementById( "textContent9" ).style.display = "none";
            }, 300 );
        }
        function increaseB3 ()
        {
            setTimeout( function ()
            {
                document.getElementById( "a3" ).style.height = "50%";
                document.getElementById( "b3" ).style.height = "100%";
                document.getElementById( "b3" ).style.cursor = "pointer";
                document.getElementById( "c3" ).style.height = "50%";
                document.getElementById( "textContent7" ).style.display = "none";
                document.getElementById( "textContent8" ).style.display = "block";
                document.getElementById( "textContent9" ).style.display = "none";
            }, 300 );
        }
        function increaseC3 ()
        {
            setTimeout( function ()
            {
                document.getElementById( "a3" ).style.height = "50%";
                document.getElementById( "b3" ).style.height = "50%";
                document.getElementById( "c3" ).style.height = "100%";
                document.getElementById( "c3" ).style.cursor = "pointer";
                document.getElementById( "textContent7" ).style.display = "none";
                document.getElementById( "textContent8" ).style.display = "none";
                document.getElementById( "textContent9" ).style.display = "block";
            }, 300 )
        }
    }
}

var x = window.matchMedia( "(max-width: 767px)" )
myFunction( x )
x.addListener( myFunction )





