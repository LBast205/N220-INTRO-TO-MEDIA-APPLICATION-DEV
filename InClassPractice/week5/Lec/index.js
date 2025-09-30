console.log("Javascript Loaded");

//Arrays
let numbers = [10,20,30,40,50];
console.log(numbers);

let fruits = ["Apple","Orange","Banana","Strawberry","Mango"];
console.log(fruits);

let boolarr = [true,false,true,false];
console.log(boolarr);

let thought_1 = ["How to do Homework","My prof is great","I am learning JS"];
console.log(thought_1[1]);

console.log(fruits[3]);
console.log(fruits.length);

numbers.length = 2;
console.log(numbers);
numbers.pop(numbers.findLast);
console.log(numbers);

let number_push_example = [10,20,30,40];
let number_push_store = number_push_example.push(50,[60,70]);
console.log(number_push_example);
console.log(number_push_store);



//Unshift adds elements to beginning and shifts everything over
let number_unshift_example = [10,20,30,40];
number_unshift_example.unshift(5,10,8);
console.log(number_unshift_example);

//removes the first element
let number_shift_example = [10,20,30,40];
let number_shift_example_store = number_shift_example.shift();//Will return the rremoved element
console.log(number_shift_example);

//Slice creates an array of elements between two indexes. Does not include the last index
let number_slice_example = [10,20,30,40,50];
let number_slice_example_store = number_slice_example.slice(1,4); //Indexes 1,2,3
console.log(number_slice_example); //returns normal array
console.log(number_slice_example_store); //returns an array of only items between index 1 and 4, so 20,30,40 

//Splice removes elements between two indexes. Includes last index. Any values after the first two index will be added to the array
let number_splice_example = [10,20,30,40,50];
let number_splice_example_store = number_splice_example.splice(1,4,100,200); //Removes Indexes 1,2,3,4, adds 100 and 200
console.log(number_splice_example); //returns array missing the elements
console.log(number_splice_example_store); //returns an array of only items between index 1 and 4, so 20,30,40, AND 50

//indexOf find the index of an element
let number_indexOf_example = [10,20,30,40,50];
console.log(number_indexOf_example.indexOf(30));
console.log(number_indexOf_example.indexOf(100)); //returns -1

//Includes - checks if an element exits in an array
console.log(number_indexOf_example.includes(30)); 
console.log(number_indexOf_example.includes(100)); 

//Sort
let number_sort_example = [5,200,1,3,9] 
console.log(number_sort_example.sort());//Sorts by alphabetical order
console.log(number_sort_example.sort((a,b) => a - b));//Sorts by numeral order

console.log(number_sort_example.reverse());//Reverse sorts
console.log(number_sort_example.reverse((a,b) => a - b));//numeral reverse sort

//Join - converts array to string
let fruits_1 = ["Apple","Orange","Banana","Strawberry","Mango"];
let joined = fruits_1.join(" - ");//paramiter changes the separator
console.log(joined);

//Concat merges two arrays
let concat_arr =  fruits_1.concat(thought_1);
console.log(concat_arr);

let concat_arr_2 =  thought_1.concat(fruits_1);//Order counts
console.log(concat_arr_2);

//2d arrays
let arr_2d = [[1,2,3],
              [4,5,6],
              [7,8,9]];

console.log(arr_2d[0][0]);
console.log(arr_2d[0][2]);

//3d array
let arr_3d = [[[1,2],[3,4]],
              [[5,6],[7,8]],
              [[9,10],[11,12]]];

console.log(arr_3d);
console.log(arr_3d[0][0][0]);
console.log(arr_3d[1][0][1]);

//Objets
let person ={
    name: "Alex",
    age: 30,
    city: 'indy'
}

console.log(person);




//Personal testing
function arr_popper(){
    mixed_arr.pop();
} 

let mixed_arr = [10,"Apple",arr_popper(),true];



console.log(mixed_arr);
mixed_arr[5];
console.log(mixed_arr);//Functions work in an array!







