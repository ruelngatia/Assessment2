
function reverseVowels(string){
    string = string.toLowerCase()
    let vowels = ['a','e','i','o','u']
    let arrOfFoundVowels = [];

    for(let i = 0; i < string.length; i++){
        if(vowels.includes(string[i])){
            arrOfFoundVowels.push(string[i])
        }
    }
    
    arrOfFoundVowels.reverse()

    let newString = []

    for(let i = 0;i < string.length; i++){
        if(vowels.includes(string[i])){
            newString.push(arrOfFoundVowels[0])
            arrOfFoundVowels.splice(0,1)
        }else{
            newString.push(string[i])
        }
    }

    return newString.join('');
}

console.log(reverseVowels('hello'));