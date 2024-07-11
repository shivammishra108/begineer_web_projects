let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

//showing value of slider
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input",()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click",()=>{
    passBox.value = generatePassword();
});

let allLowerCase = "abcdefghijklmnopqrstuvwxyz";
let allUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*?;-_:/";

function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? allLowerCase : "";
    allChars += uppercase.checked ? allUpperCase : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }

    for(let i=1;i<=inputSlider.value;i++){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return genPassword;
}

copyIcon.addEventListener("click",()=>{
    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";
    }
    
    setTimeout(()=>{
        copyIcon.innerText = "content_copy";
        copyIcon.title = ""; 
    },2500);
    
});
