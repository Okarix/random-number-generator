let generateBtn = document.querySelector('#generate');

function randomNum() {
    let min = document.querySelector('#min');
    let max = document.querySelector('#max');
    let minValue = Number(min.value);
    let maxValue = Number(max.value);
    if (minValue > maxValue) {
        minValue = maxValue + minValue;
        maxValue = minValue - maxValue;
        minValue = minValue - maxValue;
        min.value = minValue;
        max.value = maxValue;
    }
    let num = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    document.querySelector('#result').innerText = num;
}

window.addEventListener("load", randomNum());
generateBtn.addEventListener("click", randomNum);