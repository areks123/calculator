function add(value) {
    var result = document.getElementById("result");
    result.value += value;
}

function operate(operator) {
    var result = document.getElementById("result");
    result.value += " " + operator + " ";
}

function calcular() {
    var result = document.getElementById("result");
    try {
        result.value = eval(result.value);
    } catch(err) {
        result.value = "Error";
    }
}

function clear() {
    var result = document.getElementById("result");
    result.value = "";
}