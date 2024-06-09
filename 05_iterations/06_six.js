const myNums = [1, 2, 3, 4, 5, 6 ,7,  8, 9, 10];

// let newNum = myNums.map( (num) => num+10);
// console.log(newNum);
// let newNum = myNums.map( (num) => {num+10}); //same as filter if a scope is initiated then there must be return statement
// console.log(newNum);
// let newNum = myNums.map( (num) => { return num+10});
// console.log(newNum);


// Chaing of map filter methods
let newNum = myNums.map( (num) => num*10).map( (num) => num+1).filter((num) => num>60);
console.log(newNum);


