// Store.forEach(function(el){
// //             let value = el;
// //             let div = document.createElement("div");
// //             div.setAttribute("class","thumbnail")
            // div.addEventListener("click", function(){
                
            //     if(localStorage.getItem("selectedItem")==null){
            //     localStorage.setItem("selectedItem",JSON.stringify(el))
            //     } else {
            //         localStorage.removeItem("selectedItem");
            //         localStorage.setItem("selectedItem",JSON.stringify(el))
            //     }
            //     window.location.href = "http://localhost:3333/selectedItem";

            // });

window.onscroll = function () {
    
  if (window.pageYOffset >= sticky) {
    navbar.setAttribute("class","sticky")
    }
    
};
var navbar = document.getElementById("navBlock");
var sticky = navbar.offsetTop;

