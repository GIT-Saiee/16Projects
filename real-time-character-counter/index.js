const textareaE1 = document.getElementById("textarea")
const totalCounterE1 = document.getElementById("total-counter")
const remainingcounterE1 = document.getElementById("remaining-counter")

textareaE1.addEventListener("keyup",()=>{
    updateCounter()
})
updateCounter()
function updateCounter(){
    totalCounterE1.innerText = textareaE1.value.length
    remainingcounterE1.innerText = textareaE1.getAttribute("maxLength") - textareaE1.value.length
}