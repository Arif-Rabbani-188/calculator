let allBtns = document.querySelectorAll(".box");

let screen = document.querySelector(".screen");

let clickedBtn = "";
let clbtn ="";
let count = 0;
let num1= 0;
let num2= 0;
let opp=0;
let opp1 =1;

const reset = () =>{
    screen.innerHTML = "0";
}

let op = ["AC", "+/-", "%", "/", "*", "-", "+", "="];

allBtns.forEach(bt =>{
    bt.addEventListener("click", (e)=>{
        clbtn = e.target.innerHTML;

        if(op.includes(clbtn)){
            num1 = clickedBtn*1;
            clickedBtn ="";
            screen.innerHTML = clickedBtn;
          if (clbtn === "AC") {
             screen.innerHTML = "";
             num1 = 0;
             num2 = 0;
             opp = 0;
             opp1 = 1;
          }else if (clbtn === "+") {
             screen.innerHTML = opp+num1;
            opp = num1 + opp;
          }else if (clbtn === "-"){
            if (opp === 0) {
              screen.innerHTML = num1-opp;
              opp = num1 - opp;   
            }else{
              screen.innerHTML = opp-num1;
              opp = opp - num1;
            }   
          }else if (clbtn === "*") {
               screen.innerHTML = num1*opp1;
            opp1 = num1 * opp1;
          }else if (clbtn === "/") {
             if (opp1 === 1) {
                screen.innerHTML = num1/opp1;
                opp1 = num1 / opp1;
             }else{
                screen.innerHTML = opp1/num1;
                opp1 = opp1 / num1;
             }
             
          }else if (clbtn === "%") {
             screen.innerHTML = num1/100;
             opp = num1 / 100;
          }else if (clbtn === "+/-") {
             screen.innerHTML = -num1;
             opp = -num1;
          }
          
          
          
      
        }else{
            clickedBtn += e.target.innerHTML;
            screen.innerHTML = clickedBtn;
        };
         console.log(num1,opp);
    });
});
