

let positionX = 10;
let positionY = 10;

window.addEventListener("mousemove",function(element){

    let moveElement = document.querySelector(".cursor-item");
    let moveElementLittle = document.querySelector(".cursor-item-little");

    if(moveElement.style.display == "none")
    {
        // moveElement.style.left = element.clientX - 16+ "px";
        // moveElement.style.top = element.clientY - 16+ "px";

        // moveElementLittle.style.left = element.clientX - 4+ "px";
        // moveElementLittle.style.top = element.clientY - 4 + "px";

        moveElement.style.transform = `translate(${element.clientX - 16}px,${element.clientY - 16}px)`;
        moveElementLittle.style.transform = `translate(${element.clientX - 4}px,${element.clientY - 4}px)`;
    }else{
        setTimeout(() => { 
            // moveElement.style.left = element.clientX - 16 + "px";
            // moveElement.style.top = element.clientY - 16 + "px";

            // moveElementLittle.style.left = element.clientX - 4 + "px";
            // moveElementLittle.style.top = element.clientY - 4 + "px";

            moveElement.style.transform = `translate(${element.clientX - 16}px,${element.clientY - 16}px)`;
            moveElementLittle.style.transform = `translate(${element.clientX - 4}px,${element.clientY - 4}px)`;
        }, 20);
    }
})   