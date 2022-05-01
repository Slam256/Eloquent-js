//Write a function min that takes two arguments and returns their minimum. without using 

function min(a, b) {
if (a < b){
    return a
} else {
    return b
}
}

console.log(min(5,10))

//Recursion Define a recursive (characterised by recuurence or repetition) function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
//Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

function isEven(a){
    if(a%2 == 0) return true;
    else return false;
    }
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

/*
Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
PART 1: Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

//part 1: Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
function countBs(string){
    let count = 0;
    for (let i=0 ; i< string.length;i++){
        if (string[i] == "B"){
            count +=1;
        }
    }
    return count;
}

console.log(countBs("BBCD"))

//PART 2: write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters)

function countChar(string, char){
    let count = 0;
    for(let i = 0; i< string.length; i++){
        if(string[i] == char){
            count +=1;
        }
    }
    return count;
}

console.log(countChar("BaBaBlack", "B"))

//Wrap it up:  Rewrite countBs to make use of this new function.

function countChar(string, char){
    let count = 0;
    for(let i = 0; i< string.length; i++){
        if(string[i] == char){
            count +=1;
        }
    }
    return count;
}

function countBs(string){
    return countChar(string, "B")
}

console.log(countBs("BaBabbBbBB"))
// → 5
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4