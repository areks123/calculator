function clearAll() {
    var result = document.getElementById("result");
    result.value = "";
}

function clear() {
    var result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

function percent() {
    var result = document.getElementById("result");
    result.value = parseFloat(result.value) / 100;
}

function add(value) {
    var result = document.getElementById("result");
    result.value += value;
}

function operate(operator) {
    var result = document.getElementById("result");
    result.value += " " + operator + " ";
}

function calculate() {
    var result = document.getElementById("result");
    try {
        result.value = eval(result.value);
    } catch(err) {
        result.value = "Error";
    }
}


document.querySelectorAll('.keys button').forEach(button => {
    button.addEventListener('click', function() {
        let action = this.dataset.action;
        let value = this.dataset.value;

        switch (action) {
            case "clearAll":
                clearAll();
                break;
            case "clear":
                clear();
                break;
            case "percent":
                percent();
                break;
            case "add":
                add(value);
                break;
            case "operate":
                operate(value);
                break;
            case "calculate":
                calculate();
                break;
        }
    });
});


