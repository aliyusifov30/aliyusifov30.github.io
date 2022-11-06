

let positionX = 10;
let positionY = 10;

window.addEventListener("mousemove",function(element){

    let moveElement = document.querySelector(".cursor-item");

    if(moveElement.style.display == "none")
    {
        console.log(secondCursorItem)
        secondCursorItem.style.left = element.clientX - 4 + "px";
        // secondCursorItem.style.display ="flex";
        secondCursorItem.style.top = element.clientY - 4 + "px";
    }else{
        setTimeout(() => { 
            moveElement.style.left = element.clientX - 10 + "px";
            moveElement.style.top = element.clientY - 10 + "px";
        }, 80);
    }
})   

DoRainAlgorimt();

function DoRainAlgorimt(){

    let i = 0;
    let amount = 300;
    let hasZero = false;

    while(i < amount){
        div = document.createElement("div");

        let randomForZero = Math.floor(Math.random() * 10);

        if(randomForZero > 5){
            div.innerHTML = "1";
        }else{
            div.innerHTML = "0";
        }

        div.classList.add("rainNumber");

        if(Math.floor(Math.random() * screen.availWidth) > screen.availWidth){
            console.log("a")
        }

        rainMoveProp = {
            delay : Math.random() +"s",
            duration : Math.random() * 5 + "s",
            opacity : Math.random() + 0.2,
            left : Math.floor(Math.random() * screen.availWidth * 0.97) + "px",
        }
    
        div.style.animationDuration = rainMoveProp.duration;
        div.style.opacity = rainMoveProp.opacity;
        div.style.delay = rainMoveProp.delay;
        div.style.left = rainMoveProp.left;

        document.body.appendChild(div);

        i++;
    }


    console.log("asd")
}

let navbarItem = document.querySelectorAll(".li-items li a")

// navbarItem.forEach(element => {
//     element.addEventListener("mouseover",function(){
//         element.style.color = "rgb(255, 0, 0)"
//         element.style.transition = "0.5s"
//     })
//     element.addEventListener("mouseout",function(){
//         element.style.color = "white"
//         element.style.transition = "0.5s"
//     })
// });


let liItems = document.querySelectorAll(".li-items li");

let cursorItem = document.querySelector(".cursor-item");
let secondCursorItem = document.querySelector(".little-cursor-item");

liItems.forEach(element=>{
    element.addEventListener("mouseover",function(){
        cursorItem.style.display = "none"
        secondCursorItem.style.display = "flex";
        element.style.cursor = "pointer";
    })
    element.addEventListener("mouseout",function(){
        cursorItem.style.display = "flex"
        secondCursorItem.style.display = "none";
        element.style.cursor = "pointer";
    })
})

let mediaItems = document.querySelectorAll(".media-item")

mediaItems.forEach(element=>{
    element.addEventListener("mouseover",function(){
        element.style.animation = "wobble";
        element.style.animationDuration = "0.9s";
        element.style.animationIterationCount = "infinite"
        console.log("over")
    })
    element.addEventListener("mouseout",function(){
        element.style.animation = "";
        element.style.animationDuration = "";
        element.style.animationIterationCount = ""
        console.log("out")
    })
})

addEventListener('resize', function(){

    let rainNumbers = document.querySelectorAll(".rainNumber");

    rainNumbers.forEach(e=>{
        e.style.left = Math.floor(Math.random() * screen.availWidth * 0.97) + "px"
    });

    // this.document.body.style.height = this.screen.availHeight + "px";
});



// about me 

