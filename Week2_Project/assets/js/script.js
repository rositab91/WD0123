
function resetCalcolatrice() {
    let result = document.getElementById("result")
    result.value = ''
}

function totale() {
    document.getElementById("result").value = eval(document.getElementById("result").value);
}


function thisButton(button) {
    let result = document.getElementById("result")
    let num = button.id;
    result.value += num
}


