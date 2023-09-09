const containerE1 = document.querySelector(".main-container");
containerE1.addEventListener("mousemove",(event)=>{
    xPos = event.offsetX+400;
    yPos = event.offsetY+300;

    const spanE1 = document.createElement("span");
    spanE1.style.left = xPos+"px";
    spanE1.style.top = yPos+"px";
    
    const size = Math.random()*10;
    spanE1.style.width = size+"px";
    spanE1.style.height = size+"px";

    containerE1.appendChild(spanE1);
    
    setTimeout(()=>{
        spanE1.remove();
    },3000)
})