
function place(){
     
    let name = document.getElementById("Name").value;
    let number = document.getElementById("Num").value;
    let date = document.getElementById("exp").value;
    let cvv = document.getElementById("cv").value;
   
    if (name != "" && number.length == 16 && cvv.length == 3) {
        setTimeout(function () {
            window.location.href = "http:localhost:3333/ThankYouPopUp";
        },1000)
    } else {
        alert("Check All Field")
   }
}
   

function backTostore() {
        
    window.location.href = "http:location:3333/card";

}