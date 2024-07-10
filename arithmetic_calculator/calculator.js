let inp = document.querySelector("input");
let btns = document.querySelectorAll("button");

let str = "";
let buttons = Array.from(btns);

buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "AC"){
            str = "";
            inp.value = str;
        }
        else if(e.target.innerHTML == "="){
            str = eval(str);
            inp.value = str;
        }
        else if(e.target.innerHTML == "DEL"){
            str = str.substring(0,str.length-1);
            inp.value = str;
        }
        else{
            str = str + e.target.innerHTML;
            inp.value = str;
        }
    });
});