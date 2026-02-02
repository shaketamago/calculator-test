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
  return;
});

const equalsbutton = document.querySelector(".equals");

equalsbutton.addEventListener("click",()=>{
  if(display.value === ""){
    return;

  }else if(display.value.includes("**") || display.value.includes("//")){
    alert("計算が行えません。演算子が連続しています。");

  }else{
    try{
      display.value = eval(display.value);
    }catch(error){
      alert("計算が行えません。演算子が連続している可能性があります。");
    }
  }
});


