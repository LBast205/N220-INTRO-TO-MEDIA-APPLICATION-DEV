/********************************************************************
 * WEEK 5 - ARRAYS IN JAVASCRIPT
 ********************************************************************/

 
/********************
 * 1. INTRODUCTION
 ********************/

 
// Arrays are used to store multiple values in a single variable.
// Arrays can store any type: numbers, strings, booleans, or even other arrays (2D/3D).
// Each element in an array has an index starting from 0.

 
/********************************************************************
 * 2. 1D ARRAYS
 ********************************************************************/
console.log("--------1d Arrays--------");
 
// Array of integers
let numbers = [10, 20, 30, 40, 50];
console.log("Array of numbers:", numbers);



// Array of strings
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("Array of strings:", fruits);

 
// Array of booleans
let boolArr = [true, false, true, false];
console.log("Array of booleans:", boolArr);

 
// Mixed array (different data types)
let mixed = [10, "Hello", true, 3.14];
console.log("Mixed array:", mixed);

 
// Accessing elements
console.log("First element of numbers:", numbers[0]); // 10
console.log("Last element of fruits:", fruits[fruits.length - 1]); // Orange

 
/********************************************************************
 * 3. ARRAY FUNCTIONS / OPERATIONS
 ********************************************************************/

 
/***************************************************************
 * Arrays and Common Methods
 * Each example uses a separate variable so it’s easy to follow.
 * We will explain in three parts:
 *   1.  explanation (simple words)
 *   2. Technical notes (extra details)
 *   3.  note (story-style analogy)
 ***************************************************************/



/* =========================================================================
   LENGTH - find how many items are inside the array
   ========================================================================= */
console.log("--------Length--------");

let numbers_for_length = [10, 20, 30, 40, 50];

 
console.log("numbers_for_length:", numbers_for_length);
// Output: [10, 20, 30, 40, 50]

 
console.log("Length of numbers_for_length:", numbers_for_length.length);
// Output: 5



/*  explanation:
   - .length tells us how many things are inside the array.
   - Here, we have 5 numbers in the array, so length is 5.
   - Remember: counting starts at 0 in arrays.
     So, the last element is always at position length - 1.
     Example: length is 5 → last element is at index 4.

 
   Technical notes:
   - length is not a function, it’s a property.
   - If you change length to a smaller number, the array gets cut down.
     Example: numbers_for_length.length = 2 → [10, 20].

 
    note:
   - Imagine the array as a line of chairs in a theater.
   - length tells you how many chairs are filled.
   - If there are 5 people sitting, length is 5.
   - If you suddenly remove chairs from the back, the audience at the end disappears too.





   Technical side:
In JavaScript, if you set array.length = smallerNumber, JavaScript actually removes the extra elements at the back. They are gone.

 
 side:
You  might just think length is “counting”, but this example shows that length is also controlling how many items the array holds.

 
 side:
Think of the array as a theater. Each seat is an element in the array.

 
If length = 5, you keep 5 chairs, so 5 people can sit.

 
If you suddenly say length = 2, it’s like the manager removes 3 chairs from the back. The people sitting there have to leave — they vanish from the theater.

 
If you increase length = 7, you add two more chairs, but they are empty. So the new seats exist but don’t have people (undefined values).
*/



/* =========================================================================
   PUSH - add an item to the end of the array
   ========================================================================= */
console.log("--------Push--------");

let numbers_push_example = [10, 20, 30, 40, 50];

 
let pushReturnValue = numbers_push_example.push(60); // adds 60 at the end
console.log("After push(60):", numbers_push_example);
// Output: [10, 20, 30, 40, 50, 60]

 
console.log("push returned (new length):", pushReturnValue);
// Output: 6

 
/*  explanation:
   - push adds a new item at the END of the array.
   - After adding, the array becomes one element longer.
   - push also tells you the new length as its return value.

 
   Technical notes:
   - push changes the original array (not a copy).
   - You can add one item or many items at once: push(70, 80).

 
    note:
   - Think of the array as a train.
   - push adds a new coach at the very end of the train.
   - The train becomes longer, and now it can carry more passengers.
*/



/* =========================================================================
   POP - remove the LAST item of the array
   ========================================================================= */
console.log("--------Pop--------");

let numbers_pop_example = [10, 20, 30, 40, 50];

 
let poppedValue = numbers_pop_example.pop(); // removes 50
console.log("After pop():", numbers_pop_example);
// Output: [10, 20, 30, 40]

 
console.log("Value removed by pop:", poppedValue);
// Output: 50

 
/*  explanation:
   - pop removes the last item from the array.
   - It also gives you back the item that was removed.
   - The array becomes shorter by one.

 
   Technical notes:
   - pop changes the original array.
   - If you pop from an empty array, it just gives undefined.
   - pop only works with the last item (for the beginning, use shift).

 
    note:
   - Imagine a stack of books on a desk.
   - pop is like picking up the book that’s sitting on top.
   - You remove it, and now the stack has one less book.
*/






/* =========================================================================
   UNSHIFT - add an item to the BEGINNING of the array
   ========================================================================= */
console.log("--------Unshift--------");

let numbers_unshift_example = [10, 20, 30, 40, 50];

 
let unshiftReturnValue = numbers_unshift_example.unshift(5); // adds 5 at the start
console.log("After unshift(5):", numbers_unshift_example);
// Output: [5, 10, 20, 30, 40, 50]

 
console.log("unshift returned (new length):", unshiftReturnValue);
// Output: 6

 
/*  explanation:
   - unshift adds something at the very beginning of the array.
   - All the existing items shift one step forward.
   - After adding, the array becomes longer.
   - unshift also returns the new length of the array.

 
   Technical notes:
   - unshift changes the original array directly.
   - It can take multiple items: unshift(1, 2, 3).
   - Adding at the start is usually slower than push (because everything must move).

 
    note:
   - Picture the array as a parade.
   - When a new dancer joins at the front, everyone else has to move one step back.
   - unshift is like saying, “Hey, you go first in the parade!”.
*/





/* =========================================================================
   SHIFT - remove the FIRST item from the array
   ========================================================================= */
console.log("--------Shift--------");

let numbers_shift_example = [10, 20, 30, 40, 50];

 
let shiftedValue = numbers_shift_example.shift(); // removes 10
console.log("After shift():", numbers_shift_example);
// Output: [20, 30, 40, 50]

 
console.log("Value removed by shift:", shiftedValue);
// Output: 10

 
/*  explanation:
   - shift removes the very first item in the array.
   - Everything else slides forward to fill the empty space.
   - It also gives you back the item that was removed.

 
   Technical notes:
   - shift changes the original array directly.
   - If you shift from an empty array, you get undefined.
   - shift is the opposite of unshift.
   - Like unshift, this operation is slower than pop or push because all items move.

 
    note:
   - Imagine people standing in a queue at a coffee shop.
   - shift is when the first customer gets their coffee and leaves the line.
   - Everyone behind them moves one step forward.
*/



/* =========================================================================
   SLICE - copy PART of an array (without changing the original)
   ========================================================================= */
console.log("--------Slice--------");

let numbers_slice_example = [10, 20, 30, 40, 50];

 
let partArray = numbers_slice_example.slice(1, 3);
console.log("Slice from index 1 to 3 (not including 3):", partArray);
// Output: [20, 30]

 
console.log("Original array after slice():", numbers_slice_example);
// Output: [10, 20, 30, 40, 50]

 
/*  explanation:
   - slice makes a copy of part of the array.
   - You choose the start index and the end index (end is not included).
   - The original array does not get changed.

 
   Technical notes:
   - slice(start, end) copies from start up to (but not including) end.
   - If you don’t give an end, it copies until the end of the array.
   - If you use negative numbers, they count from the back. Example: slice(-2) gets the last 2 items.

 
    note:
   - Imagine cutting out a scene from a movie reel.
   - You don’t damage the original film, you just take a copy of the scene you want.
   - slice is like saying, “Show me only this part of the story.”
*/



/* =========================================================================
   SPLICE - add, remove, or replace items in the middle of an array
   ========================================================================= */
console.log("--------Splice--------");

let numbers_splice_example = [10, 20, 30, 40, 50];

 
// Remove 2 items starting at index 1, and insert 100, 200
let removedItems = numbers_splice_example.splice(1, 2, 100, 200);

 
console.log("After splice(1,2,100,200):", numbers_splice_example);
// Output: [10, 100, 200, 40, 50]

 
console.log("Items removed by splice:", removedItems);
// Output: [20, 30]

 
/*  explanation:
   - splice is like a surgery tool for arrays.
   - You can go to any position in the array, cut out items, and put new ones in their place.
   - It changes the original array.

 
   Technical notes:
   - splice(start, deleteCount, item1, item2, ...)
     start → where to begin.
     deleteCount → how many items to remove.
     items → new values to add at that spot.
   - Returns the items that were removed.
   - Unlike slice, splice modifies the array itself.

 
    note:
   - Imagine editing a play script.
   - You remove two characters (20, 30) from Act 1 and bring in new characters (100, 200).
   - The play still goes on, but the cast has changed mid-story.
*/



/* =========================================================================
   INDEXOF & INCLUDES - searching inside arrays
   ========================================================================= */
console.log("--------INDEXOF--------");
let numbers_search_example = [10, 20, 30, 40, 50];

 
console.log("Index of 30:", numbers_search_example.indexOf(30));
// Output: 2 (because 30 is at index 2)

 
console.log("Index of 99:", numbers_search_example.indexOf(99));
// Output: -1 (because 99 is not in the array)

 
console.log("Does the array include 40?", numbers_search_example.includes(40));
// Output: true

 
console.log("Does the array include 99?", numbers_search_example.includes(99));
// Output: false

 
/*  explanation:
   - indexOf tells you the position of an item in the array.
   - If the item is not found, it gives -1.
   - includes tells you whether an item exists in the array (true/false).
   - They are like "search tools" for arrays.

 
   Technical notes:
   - indexOf(item, fromIndex) starts searching from the left, can give starting point.
   - includes(item, fromIndex) also allows specifying from where to check.
   - Both work with strict equality (===), so "30" is not the same as 30.

 
    note:
   - indexOf is like asking, "What seat number is actor 30 sitting in the theater?"
   - includes is like asking, "Is actor 40 even in this play at all?"
   - If indexOf gives -1, it’s like the actor never came to the stage.
*/

 
/* =========================================================================
   SORT & REVERSE - arranging and flipping arrays
   ========================================================================= */
console.log("--------Sort--------");
let arrSort_example = [5, 2, 9, 1, 7];

 
console.log("Original array:", arrSort_example);
// Output: [5, 2, 9, 1, 7]

 
// Default sort (alphabetical order, since elements are converted to strings)
let defaultSorted = arrSort_example.slice(); // make a copy
defaultSorted.sort();
console.log("Default sort result:", defaultSorted);
// Output: [1, 2, 5, 7, 9]  (looks fine here, but watch out with bigger numbers!)

 
// Numeric sort with comparator function
let numericSorted = arrSort_example.slice();
numericSorted.sort(function(a, b) { return a - b; });
console.log("Numeric sort result:", numericSorted);
// Output: [1, 2, 5, 7, 9]

 
// Reverse the array
let reversed = numericSorted.slice().reverse();
console.log("Reversed numeric sort:", reversed);
// Output: [9, 7, 5, 2, 1]

 
/*  explanation:
   - sort() arranges elements, but by default it treats them like words (strings).
   - reverse() flips the order of items in the array.
   - Together, you can sort numbers or names and then flip them if needed.

 
   Technical notes:
   - sort() without a function converts values to strings and compares them.
   - For numbers, always use a comparator like (a, b) => a - b.
   - reverse() changes the array in place and returns the same array reference.

 
    note:
   - Imagine arranging books on a shelf: sort is putting them in order (like A-Z).
   - reverse is flipping the entire shelf, so the last book becomes the first.
   - It’s like a stage crew rearranging props instantly between two acts.
*/



/* =========================================================================
   JOIN & CONCAT - combining items into text or new arrays
   ========================================================================= */
console.log("--------Join/Concat--------");
let fruits_for_join = ["Apple", "Banana", "Mango", "Orange"];

 
// Join turns an array into a string
let joinedFruits = fruits_for_join.join(", ");
console.log("Joined fruits:", joinedFruits);
// Output: "Apple, Banana, Mango, Orange"

 
let numbers_for_concat = [10, 20, 30];
let fruits_for_concat = ["Apple", "Banana"];

 
// Concat combines arrays into a new array
let concatenated = numbers_for_concat.concat(fruits_for_concat);
console.log("Concatenated array:", concatenated);
// Output: [10, 20, 30, "Apple", "Banana"]

 
/*  explanation:
   - join() glues all the elements into one string, with a separator you choose.
   - concat() merges arrays together into a new array.
   - join is for making text, concat is for making bigger arrays.

 
   Technical notes:
   - join(separator) → separator defaults to "," if not given.
   - concat() does not modify the original arrays; it creates a new one.
   - Modern alternative for concat is the spread operator: [...a, ...b].

 
    note:
   - join is like turning all the cast members into one chorus singing together.
   - concat is like merging two different theater groups into one big play.
   - One gives you a song, the other gives you a bigger cast on stage.
*/



/********************************************************************
 * 4. 2D ARRAYS (ARRAY OF ARRAYS)
 ********************************************************************/
console.log("--------2d Arrays--------");
let matrix2D = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log("2D Array (matrix):", matrix2D);
// Output: [[1, 2, 3], [4, 5, 6]]

 
// Accessing elements
console.log("Element at row 0, col 1:", matrix2D[0][1]); // 2
console.log("Element at row 1, col 2:", matrix2D[1][2]); // 6

 
/*  explanation:
   - A 2D array is like a table made up of rows and columns.
   - Each inner array is one row.
   - To get an element, you need two coordinates: row index and column index.
   - Example: matrix2D[0][1] means "row 0, column 1", which is 2.

 
   Technical notes:
   - Arrays are zero-based: first row is index 0, first column is index 0.
   - A 2D array in JavaScript is just an array where each element is itself an array.
   - There’s no true “matrix” type; it’s just nested arrays.

 
    note:
   - Think of it like a chessboard: rows and columns.
   - Or like a seating chart in a theater: row 0, seat 1 points to one specific chair.
   - Each coordinate (row, column) is like an address leading you to the right “seat”.
*/



/********************************************************************
 * 5. 3D ARRAYS (ARRAY OF ARRAYS OF ARRAYS)
 ********************************************************************/
console.log("--------3d Arrays--------");

let matrix3D = [
  [
    [1, 2], [3, 4]
  ],
  [
    [5, 6], [7, 8]
  ]
];
console.log("3D Array:", matrix3D);
console.log("Access element [1][0][1]:", matrix3D[1][0][1]); // 6

 
/*  explanation:
   - A 3D array is like stacking multiple 2D tables on top of each other.
   - You need three coordinates: layer, row, column.
   - Example: matrix3D[1][0][1] means:
       Layer 1 → Row 0 → Column 1 → which is the number 6.

 
   Technical notes:
   - JavaScript still doesn’t have “true” 3D arrays. It’s arrays within arrays within arrays.
   - Syntax: arr[layer][row][column].
   - Can become confusing if nesting is too deep.

 
    note:
   - Imagine a Rubik’s Cube: it has layers, rows, and columns.
   - Or think of a building: floors (layer), apartments (row), rooms inside (column).
   - Each address pinpoints exactly one small room in that giant structure.
*/






/********************************************************************
 * WEEK 6 - Objects
 ********************************************************************/
console.log("--------Objects--------");

let person = {
    name: "Alex",
    age: 30,
    city: "Indiana"
}

console.log(person);

let studentObj1 = {
    name: "Abc",
    age: 30,
    isEnrolled: true
}

console.log("Student details: "+studentObj1);

//Dot notation
console.log("Student name: "+studentObj1.name);


let arr = [10,20,30];
//Length is a property of array
console.log(arr.length);
console.log(arr);

//Brackets Notation
console.log("Student age: ", studentObj1["age"]);

//Update
studentObj1.age = 26;
console.log("Updated age: ",studentObj1.age);

//Add new property
studentObj1.grade ="A+++";
console.log("Added new property - grade: ",studentObj1.grade);

//Delete Property
delete studentObj1.isEnrolled;
console.log("Deleted isEnrolled Property: ",studentObj1);

//Nested Object
let classroomObj1 = {
    roomnumber: 252,
    students:{
        student1: { name: "abcd", age:45},
        student2: { name: "abcd1", age:65}
    }

}

console.log("classroom details: ",classroomObj1);
console.log("Student details: ",classroomObj1.students);
console.log("Student1 details: ",classroomObj1.students.student1);
console.log("Student2 age: ", classroomObj1.students.student2.age);

//Loops
console.log("--------For Loop--------");

for (let i=0; i < 10; i++) {
    console.log("iteration: ",i);
    
}

console.log("For Loop 2");

//Adding in loops
let total = 0;

for (let i = 0; i < 10; i++) {
    total += i;
    console.log("iteration: ",total);
}

//Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++){
        console.log(i,"*",j,"=",i*j)
    }
    console.log("--End Of Inner Loop--");
    
}


//While Loop
console.log("--------While Loop--------");

let k =1;
while (k < 3) {
    console.log("While loop Iteration: ",k);
    k++;
}

let l = 10;

while (l%10 == 0 && l <= 100) {
    console.log("iteration in while loop 2: ",l);
    l+=10
}


console.log("--------Do While Loop--------");

let m=0;
do{
    console.log("iteration in do while loop: ",m);
    m++;
}while(m<10);


//Conditional statements
console.log("--------Conditional statements--------");

//if-else
let score = 80;
if(score >=90){
    console.log("A");
}else if(score >=80){
    console.log("B");
}else if(score >=70){
    console.log("C");
}else if(score >=60){
    console.log("D");
}else{
    console.log("F");
}   

console.log("--------Switch statements--------");
let day =3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Not a day of the week!");
        break;
}



