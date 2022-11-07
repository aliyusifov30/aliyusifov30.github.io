
let contactHead = document.querySelectorAll(".contact-head span")

contactHead.forEach(element=>{
    element.classList.add("animate__animated","animate__shakeY")

    
    element.addEventListener("mouseover",function(){
        element.classList.add("animate__animated","animate__shakeY")
    })
    element.addEventListener("mouseout",function(){
        setTimeout(() => {
            element.classList.remove("animate__animated","animate__shakeY")
        }, 400);
    })
})

contactHead.forEach(element=>{
    setTimeout(() => {
        element.classList.remove("animate__animated","animate__shakeY")
    }, 700);
})
