const screen = document.getElementById("screen")
const screenText = document.getElementById("screen-text")
const screenResults = document.getElementById("screen-results")
const clearKey = document.getElementById("clear-all")
const deleteKey = document.getElementById("delete-one")
const numberKey = document.querySelectorAll(".key-number")
const operatorKey = document.querySelectorAll(".key-operator")
const pointKey = document.querySelectorAll(".key-point")
    // function numberKeyPressed
function numberKeyPressed() {
    numberKey.forEach(function(key) {
        key.addEventListener('click', function() {
            screenResults.innerText += parseFloat(Number(key.innerHTML))

        });
    });
}
// function operatorKeyPressed
function operatorKeyPressed() {
    operatorKey.forEach(function(key) {
        key.addEventListener('click', function() {
            screenText.innerText = (key.innerHTML)

        });
    });
}
// function pointKeyPressed
function pointKeyPressed() {
    pointKey.forEach(function(key) {
        key.addEventListener('click', function() {
            screenResults.innerText = (key.innerHTML)

        });
    });
}
// function clearAll
function clearAll() {
    clearKey.addEventListener("click", function() {
        screenText.innerText = ""
        screenResults.innerText = 0
    })
}
numberKeyPressed()
operatorKeyPressed()
pointKeyPressed()
clearAll()