

let load = document.querySelector(".load")
let body = document.querySelector(".sayHello")

body.style.overflow = "hidden";
load.style.transition = "100";

window.addEventListener("load",function(){
    load.style.opacity = "0";
    load.style.transition = "2s";
    console.log(body)
    body.style.overflow = "auto !important";
})
