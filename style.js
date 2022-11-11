function DeleteMe() {
    document.getElementById('myResult').value = ""
}

function calculator(newValue) {
    document.getElementById("myResult").value += newValue;
}
function answer() {
    const a = document.getElementById("myResult").value;
    const b = eval(a);
    document.getElementById("myResult").value = b;
}