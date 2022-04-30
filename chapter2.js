/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

for (tri ="#"; tri.length <8; tri +="#")
console.log(tri)

/*FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/


for(n=1; n <=100; n++){
    let output = ""
    if (n%3 === 0) output += "Fizz";
    if (n%5 === 0) output += "Buzz";
    console.log(output||n);
}





/* Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
*/

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
    for(let x = 0; x < size; x++){
        if((x+y)%2 == 0) {board += "";
    }else{
        board +="#";
    }
}
    board += "\n";
}
console.log(board);


/* let size = 8; //sets a limit for the iterations to be used in the loop

let board = ""; // sets a blank placeholder to be filled with our if statements 

for (let y = 0; y < size; y++) {
    //y represents the vertical axis aka the rows. this creates the loop for the rows.
  for (let x = 0; x < size; x++) {
    //x represents the horizontal axis aka the columns. This creates the loop for the columns.
    //note that this is for loop within a for loop aka LOOPCEPTION.
    // The "for loop of x" must complete it's entire run from 0 to 8 before the "loop of y" can start it's next loop, where y++ 
    if ((x + y) % 2 == 0) {
      board += " ";

    //When we set x+y every second number will be divisible by 2, therefore, every second character will execute the "" space character, and each new line will alternate between an even/odd number. 
    } else {
      board += "#";
    }
  }
  board += "\n";

  // \n creates a new line  this statement is attached to the loop for the y. So after the horizontal axis is done we go to a new line.
}

console.log(board); */