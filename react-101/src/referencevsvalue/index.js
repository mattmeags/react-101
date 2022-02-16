//Passed by Value vs Passed by Reference

let a = 10; //value 10
let b = 'hi'; //value 'hi'
let c = a; //value 10
c = c + 1 //value 11

let d = [1, 2] //Array and objects are passed by reference
    //d just stores a reference to this array in memory

let e = d; //e is a reference memory of array
e === d //true
e == d
//SO e and d point to the same point in memory
e.push(3); //e and d will update

e = [3, 4, 5] //New reference in memory created. This overwrites value of e

let f = [1, 2];
let g = [1, 2];
f === g //false point to different references in mememory
f == g //false point to different references in mememory


function add(array, element) {
    array.push(element);
}

add(g, 3);

//Numbers, strings,booleans undefined are set by avlue
