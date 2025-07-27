const inp = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let str = "";

// Helper functions
function clearAll() {
  str = "";
  inp.value = "0";
}

function deleteChar() {
  str = str.slice(0, -1);
  inp.value = str || "0";
}

function calculate() {
  try {
    // Replace percentage symbol with division by 100
    let expression = str.replace(/%/g, "/100");
    str = Function("return " + expression)().toString();
    inp.value = str;
  } catch {
    inp.value = "Error";
    str = "";
  }
}

function addChar(char) {
  const lastChar = str[str.length - 1];

  // Prevent multiple consecutive operators (except %)
  if (["+", "-", "*", "/", "%"].includes(char) && 
      ["+", "-", "*", "/", "%"].includes(lastChar)) {
    return;
  }

  // If first character is operator, ignore
  if (str === "" && ["+", "*", "/", "%"].includes(char)) return;

  str += char;
  inp.value = str;
}

// Event listeners for buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (value === "AC") clearAll();
    else if (value === "DEL") deleteChar();
    else if (value === "=") calculate();
    else addChar(value);
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || ["+","-","*","/","%","."].includes(e.key)) {
    addChar(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteChar();
  } else if (e.key === "Escape") {
    clearAll();
  }
});
