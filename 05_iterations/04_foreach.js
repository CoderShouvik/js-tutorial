let arr = ['java', 'cpp', 'ruby', 'js', 'python'];
// arr.forEach(function (value){                   //in call back function you don't need name of the function
//     console.log(value);
// })
arr.forEach( (value) => {
    // console.log(value);                 //you can also use arrow function 
})


//I don't know how it's happening

// function printMe(i){
//     console.log(i);
// }

// arr.forEach(printMe)


arr.forEach( (value, index, arr) => {
    // console.log(value, index, arr);                 //you can also use arrow function 
})



const arrOb = [
    {
        name: 'Python',
        file: '.py'
    },
    {
        name: 'Java',
        file: '.java'
    },
    {
        name: 'Java Script',
        file: '.js'
    },
]

// console.log(arrOb[0].name);

arrOb.forEach((val) => {
    console.log(val.name);
    console.log(val.file);
});

