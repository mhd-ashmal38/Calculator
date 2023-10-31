// display
function display(num){
    output.value  +=num;
}

// clearall
function clearAll(){
    output.value=''
}


function evaluateExp(){
    output.value=eval(output.value)
}


// remove last
function removeLast(){
    currentExp=output.value
    output.value=currentExp.slice(0,-1)
}