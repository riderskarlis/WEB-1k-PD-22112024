function rezinat() {
    let firstNum = document.getElementById("firstNum");
    let rezinatajs = document.getElementById("rezinatajs").value;
    let secondNum = document.getElementById("secondNum");
    let btn = document.getElementById("btn");
    let result = document.getElementById("result");

    if (rezinatajs == "+") {
        result.innerHTML = parseInt(firstNum.value) + parseInt(secondNum.value);
    } else if (rezinatajs == "-") {
        result.innerHTML = parseInt(firstNum.value) - parseInt(secondNum.value);
    } else if (rezinatajs == "*") {
        result.innerHTML = parseInt(firstNum.value) * parseInt(secondNum.value);
    } else if (rezinatajs == "/") {
        result.innerHTML = parseInt(firstNum.value) / parseInt(secondNum.value);
    } else {
        result.innerHTML = "Nepareiza funkcija!"
    }
}

btn.addEventListener("click", rezinat);