let num = [1,2,3,4,5,6];
let newNum = num.reduce(function(acc, cur){

    console.log(`acc: ${acc} & cur: ${cur}`);
    return acc+cur;
}, 0)                                            // this 0 is the initial value of accumulator and current valu is the first element of the array. 
                                                 // if I don't put any value by default it is first value of the array and current value is 2nd value of the array;
console.log(newNum);



let courses = [
    {
        name: 'js',
        price: 100
    },
    {
        name: 'web',
        price: 200
    },
    {
        name: 'dsa',
        price: 300
    },
    {
        name: 'py',
        price: 400
    },
    {
        name: 'java',
        price: 500
    }
]

let totalCost = courses.reduce((acc, sub) => acc+sub.price, 0);

console.log(totalCost);