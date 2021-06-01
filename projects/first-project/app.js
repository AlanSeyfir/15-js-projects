//Global variables
const changeBtnColor = document.getElementById('changeColor');
const colorValue = document.getElementById('color');
let background = document.getElementById('background');

/*----------------------------SIMPLE COLOR FLIPPER----------------------------*/

const simpleColors = ["salmon", "blue", "#F15025", "#a120d5", "rgb(41, 195, 241)", "rgb(41, 241, 158)"];


changeBtnColor.addEventListener("click", function(){
    const randomColor = Math.floor(Math.random() * simpleColors.length);

    background.style.backgroundColor = simpleColors[randomColor];
    colorValue.innerText = simpleColors[randomColor];
});




