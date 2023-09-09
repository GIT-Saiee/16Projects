const prevE1 = document.querySelector(".prev");
const nextE1 = document.querySelector(".next");
const imageContainerE1 = document.querySelector(".image-container");
prevE1.addEventListener("click",()=>{
    maximageNum = 10;
    
    addNewImages();
})
nextE1.addEventListener("click",()=>{
    maximageNum = 10;
    count=0;
    length = 5;
    addNewImages();
    
})

function addNewImages(){
    if(length>maximageNum){
        return;
    }
    console.log(count);
    console.log(length);
    
    for (let index = count; index<length;index++){
        document = window.location.href;
        const newImgE1 = document.createElement("img");
        console.log(document.childNodes[1].querySelector(".image-container"));


        // console.log(document);
        newImgE1.src =`https://picsum.photos/200/300?random=${Math.floor(Math.random()*2000)}`;
        console.log("hello")
        console.log(window.location.href);
        imageContainerE1.appendChild(newImgE1);
    }
    count = count+length;
    length = length+3;
    // addNewImages();
    
    }