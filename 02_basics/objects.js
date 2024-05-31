let mySymbol = Symbol('key1');  //this is how to declare a symbol
let myObject = {
    name: "Shouvik",
    'your Address': 'India',
    age: 79,
    email: 'shouvik3501@gmail.com',
    profession: 'Coder',
    isMarried: false,
    [mySymbol]: 'newkey'  //this is how to use a symbol as a key in an object
};

// console.log(myObject.name);
// console.log(myObject.age);
// console.log(myObject.email);
// console.log(myObject['your Address']);

// Object.freeze(myObject);

// myObject['name'] = 'Hrithik';
// console.log(myObject['name']);
// console.log(myObject[mySymbol]);

myObject.myFunction = function(){
    console.log('Hello guys I am here to master JavaScript');
}
myObject.myFunctionTwo = function(){
    console.log(`Hello! ${this.name}`);
}


// console.log(myObject);
myObject.myFunction();
myObject.myFunctionTwo();
