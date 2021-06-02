const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const incrementBtn = document.getElementById('increment');
const numberCounter = document.getElementById('number');

let counterNumber = 0;



decrementBtn.addEventListener('click', function(){
    counterNumber--;
    numberCounter.innerText = counterNumber;
    if (numberCounter.innerText <= '-1') {
        numberCounter.style.color = 'red';
    }else if(numberCounter.innerText === '0') {
        numberCounter.style.color = 'white'
    }
    
});

resetBtn.addEventListener('click', function(){
    counterNumber = 0;
    numberCounter.innerText = counterNumber;
    if (numberCounter.innerText === '0') {
        numberCounter.style.color = 'white'
    }
    
});

incrementBtn.addEventListener('click', function(){
    counterNumber++;
    numberCounter.innerText = counterNumber; 
    if (numberCounter.innerText >= '1') {
        numberCounter.style.color = 'chartreuse';
    }else if(numberCounter.innerText === '0') {
        numberCounter.style.color = 'white'
    }
});