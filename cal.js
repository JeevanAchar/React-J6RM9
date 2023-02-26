// let one , two , three, four , five;
// let six , seven , eight , nine , zero;
// let plus, minus, into, equals, divide, dot;


// one = document.getElementById("1")
// two = document.getElementById('2')
// three = document.getElementById('3')
// four = document.getElementById('4')
// five = document.getElementById('5')
// six= document.getElementById('6')
// seven = document.getElementById('7')
// eight = document.getElementById('8')
// nine = document.getElementById('9')
// zero = document.getElementById('0')
// plus = document.getElementById('+')
// minus = document.getElementById('-')
// into = document.getElementById('*')
// equals = document.getElementById('=')
// dot = document.getElementById('.')
// divide = document.getElementById('/')
// display = document.getElementById('display');


// one.addEventListener("click", ()=>{
//     one = 1
//     console.log(one);
//     display.innerHTML = one;
// })
// two.addEventListener("click", ()=>{
//     two = 2
//     console.log(two)
//     display.innerHTML = two;
// })
// three.addEventListener("click",()=>{
//     three = 3
//     console.log(three)
//     display.innerHTML = three;
// })
// four.addEventListener("click",()=>{
//     four = 4
//     console.log(four);
//     display.innerHTML = four;
// })
// equals.addEventListener("click",()=>{
//     if(equals.id === "="){
//        display.innerHTML.value;
//        console.log(equals.value);
//     }
// })

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((values, index) =>{
    console.log(values,index);
    values.addEventListener("click", () =>{
         if(values.id == "clear"){
            display.value = "";
        }else{
            display.value += values.id;
        }
    })
})