const display = document.getElementById("display");
const numopebuttons = document.querySelectorAll(".number,.operator");

numopebuttons.forEach(button=>{
  button.addEventListener("click",()=>{
    const numope = button.dataset.number || button.dataset.operator;

    display.value +=numope;
})
})

const clearbutton = document.querySelector(".clear");

clearbutton.addEventListener("click",()=>{
  display.value = "";
})

const equalsbutton = document.querySelector(".equals");

equalsbutton.addEventListener("click",()=>{
  display.value = eval(display.value);
})


