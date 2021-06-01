//Global variables
const changeBtnColor = document.getElementById('changeColor');
const colorValue = document.getElementById('color');
let background = document.getElementById('background');

/*-----------------------------HEX COLOR FLIPPER-----------------------------*/

const hexColors = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

changeBtnColor.addEventListener('click', function(){
    
    let assignColor = rndHexColor();
    //Don't make my mistake to call the function in every element. Bc it's calling the function different times we get a different value each time.
    background.style.backgroundColor = assignColor;
    colorValue.style.color = assignColor;
    colorValue.innerText = assignColor;
    console.log(assignColor);
});

function rndHexColor(){
    let resultColors = [];
    for (let i = 0; i <= 5; i++) {
        let randomColor = hexColors[Math.floor(Math.random() * hexColors.length)];
        resultColors.push(randomColor);
    }
    return '#' + resultColors.join("");
}