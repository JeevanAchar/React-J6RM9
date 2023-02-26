const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((values, index) =>{
    console.log(values,index);
    values.addEventListener("click", () =>{
         if(values.id == "clear"){
            display.value = "";
        }
        else if(values.id === "="){
           let a = display.value ;
           let b = eval(a);
           display.value = b;
        }
        else{
            display.value += values.id;
        }
    })
})