function allClear(){
    display.value = "";
}

function clear(){
    
}

function appendNumber(num){
    display.value += num;
}

function appendOperator(operator){
    display.value += operator;
}

function calculateResult() {
    let result;
    try {
        result = eval(display.value.replace(/[×÷]/g, function(match) {
            return match === '×' ? '*' : '/';
        }));
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

