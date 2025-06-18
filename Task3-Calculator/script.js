let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let result = eval(display.value);
    addToHistory(display.value + " = " + result);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function addToHistory(entry) {
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.contains("dark")
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");
}

// Load saved theme
window.onload = function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
};

// Keyboard support
document.addEventListener("keydown", function(e) {
  if ((e.key >= "0" && e.key <= "9") || "+-*/.%()".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculateResult();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
