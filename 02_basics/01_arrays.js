//arrays


let myArray = [0,1,2,3,4,5];
console.log(myArray[0]);


let myHeroes = ['Shaktiman', 'Naruto' , 'Yami Sukehiro', 'Gojo Satoru', 'Luffy', 'Goku', 'Vegeta'];

let array2 = new Array(1,2,'str',3,4);
console.log(array2[2]);

array2.push(23);
array2.push('Shouvik');
array2.pop();
console.log(array2)


// myArray.shift();
myArray.unshift(12);
console.log(myArray)
console.log(myArray.includes(100));
console.log(myArray.indexOf(30));

let nextArray = myArray.join();
console.log(typeof myArray);
console.log(typeof nextArray);

/*

let myArray = [0,1,2,3,4,5, 6];
myArray                            [0,1,2,3,4,5,6]    IT PRINTS THE ARRAY AS IT IS.
type of myArray                    object             ARRAY IS A TYPE OF OBJECT

console.log(myArray[0]);
myArray.push(12);
myArray.pop()
console.log(myArray);
console.log(myArray.includes(0));
console.log(myArray.indexOf(4));

myArray.shift();
myArray.unshift(13);
console.log(myArray);
let newArray = myArray.join();
console.log(newArray);
console.log( typeof newArray);

*/
