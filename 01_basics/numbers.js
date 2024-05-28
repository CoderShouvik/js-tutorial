let nums = 400;
let balance = new Number(100);
console.log(balance.toString().length);
console.log(balance.toFixed(2));



let num2 = 23.8996;
console.log(num2.toPrecision(5))


let num3 = 1000000;
console.log(num3.toLocaleString('en-In'))


/*
    let balance = new Number(100);

    balance.toString()                           //then we can use many string methods like balance.toString().length


    let num2 = 23.8996;

    num2.toPrecision(5)

    num2.toFixed(2)                    23.89     //after decimal shows number of digits given input


    let num3 = 1000000;

    num3.toLocaleString()               1,000,000
    
    num3.toLocaleString('en-In')        10,00,000

    # in browser #

    Number.   (then various math methods)



*/



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  Math

/* 

Math.sqrt(25)                       ===>  5                                         //square root of a number
Math.pow(5,2)                       ===>  25                                        //power of a number
Math.round(2.4)                     ===>  2                                         //round of a number after decimal if less than 5 then floor else ceil number
Math.floor(2.4)                     ===>  2                                         //basically the decimal value
Math.ceil(2.4)                      ===>  3                                         //next integer
Math.abs(-4)                        ===>  4                                         //positive value of any number
Math.min(1,2,6,4,3)                 ===>  1                                         //smallest number of a list
Math.max(1,2,6,4,3)                 ===>  6                                         //biggest number of a list
Math.random()                       ===>  random value from 0to 1                       


// very very important
// let min = 1;
// let max = 6;

// console.log(Math.floor(((Math.random()*(max-(min-1))) + 1) + min-1))
// console.log(Math.floor(((Math.random()*(max-(min))) + 1) + min))


// console.log(Math.floor(((Math.random()*11) + 1) + 9))



*/










console.log(Math.sqrt(25));
console.log(Math.pow(5,2));
console.log(Math.round(2.4));
console.log(Math.floor(2.4));
console.log(Math.ceil(2.4));
console.log(Math.abs(-4));
console.log(Math.min(1,2,6,4,3));
console.log(Math.max(1,2,6,4,3));
console.log(Math.random());


