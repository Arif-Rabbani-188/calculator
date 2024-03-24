let allBtns = document.querySelectorAll(".box");
let screen = document.querySelector(".screen");
let clickedBtn = "";
let clbtn ="";
let count = 0;
let num1= 0;
const reset = () =>{
    screen.innerHTML = "0";
}
let op = ["AC", "+/-", "%", "/", "*", "-", "+"];
allBtns.forEach(bt =>{
    bt.addEventListener("click", (e)=>{
        clbtn = e.target.innerHTML;
        if(op.includes(clbtn)){
            num1 = clickedBtn;
            clickedBtn ="";
        }
        clickedBtn += e.target.innerHTML;
        screen.innerHTML = clickedBtn;
        console.log(num1);
    });
});
