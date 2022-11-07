
let aboutTitles = document.querySelectorAll(".about-context span")
let aboutHead = document.querySelectorAll(".about-head span")
let myRoadMap = document.querySelector(".myRoadMapButton i")

console.log(aboutTitles)

aboutTitles.forEach(element=>{

    element.classList.add("animate__animated","animate__tada","animate__fast")

    element.addEventListener("mouseover",function(){
        element.classList.add("animate__animated","animate__tada","animate__fast")
    })
    element.addEventListener("mouseout",function(){
        setTimeout(() => {
            element.classList.remove("animate__animated","animate__tada","animate__fast")
        }, 400);
    })
})
aboutHead.forEach(element=>{
    element.classList.add("animate__animated","animate__wobble","animate__fast")

    element.addEventListener("mouseover",function(){
        element.classList.add("animate__animated","animate__wobble","animate__fast")
    })
    element.addEventListener("mouseout",function(){
        setTimeout(() => {
            element.classList.remove("animate__animated","animate__wobble","animate__fast")
        }, 400);
    })
})
aboutHead.forEach(element=>{
    setTimeout(() => {
        element.classList.remove("animate__animated","animate__wobble","animate__fast")
    }, 700);
})

