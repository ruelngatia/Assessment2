
function palindrome(value){

    for(let i = 0; i < value.length; i++){

        if(value[i] != value[((value.length - 1) -i)]){
            return false
        } 
        
    }

    return true
    
}

console.log("Is the inputed value: 121 a palindrome =>".concat(palindrome('121')))
console.log("Is the inputed value: -121 a palindrome =>".concat(palindrome('-121')))