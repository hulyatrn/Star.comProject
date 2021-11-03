const activeSlideImage=document.getElementById("active-slide-img")
const activeSlideTitle=document.querySelector("#active-slide-title h3")

const slideList=document.querySelectorAll(".slide-list li")

window.onload=function(){
    Array.prototype.slice.call(slideList).forEach(item=>{
        item.addEventListener("mouseover",()=>{

            if(activeSlideImage.src != item.querySelector("a img").getAttribute("src") && activeSlideTitle.innerHTML != item.querySelector("h3").innerText){
                activeSlideImage.src = item.querySelector("a img").getAttribute("src")
                activeSlideTitle.innerHTML = item.querySelector("h3").getAttribute("data-text");
            }
        })
    })
}