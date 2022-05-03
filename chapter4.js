/*The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:
 console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function range(first, last){
    let numbers = []
      for (i=first; i <= last; i++){ 
          numbers.push(i)
      }
  return numbers;
}
  
console.log(range(1,10))

function sum(array){
      let total = 0;
      for(let value of array){ //i= 0; i < array.length; i++
          total += value}
      return total
      }

console.log(sum([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) //-> 55

//All together.

function range(first, last, step = first < last? 1 : -1) // step that is an if function of sorts. if first is less than last step is 1 otw -1, if you dont specify the step. aka ternary operator
{
    let array = [];
    if (step > 0) {
        for (i=first; i <= last; i += step){
            array.push(i);
    } 
    }else {
        for (i=first; i >= last; i += step){ 
            array.push(i);
        }
    }
    return array;
}
function sum(array){
      let total = 0;
      for(let value of array){ //i= 0; i < array.length; i++
          total += value}
      return total
      }

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

/* Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method. */

function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
  }
  
  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  console.log(reverseArrayInPlace(arrayValue));
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]