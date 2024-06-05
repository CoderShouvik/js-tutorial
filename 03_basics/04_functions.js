// let myCourse = {
//     name: 'Python Mastery',
//     price: 199,
//     currency: '$',
//     message: function(){
//         console.log(`Hello, welcome to the ${this.name} course.`)
//         console.log(this); //this represents the current context. Since it is in the myCourse object it's showing the key val pairs or the components in the object
//     },
// }

// myCourse.message();

// console.log(this)  //Since here is nothing so it will give an empty object

/*
    If I print 'this' keyword in browser console  we will get windows object
*/


function chai(){
    let name = 'Shouvik';
    // console.log(this);
}

chai()

//this keyword only works in objects not in functions
let chai2 = () =>{
    let name = 'Shouvik'
    console.log(this);
}
chai2()

let chai3 = () => console.log('chai333333333333')

chai3()

// console.log(typeof chai2);


/*

    1. Normal function:  You can call the function before even initialization. As long as it has been initialized anywhere in the code it won't return error

    chai()

    function chai(){
        let name = 'Shouvik'
        console.log(name);  
    }

    chai()



    2. function in a variable:  Since it is stored in a variable you can't call it before initialization. It'll return error.
    chai()  //It'll return error.

    let chai = function(){
        let name = 'Shouvik'
        console.log(name);  
    }

    chai()


    3.  Arrow function: Can't access it before initialization

    chai() 
    let chai = () => {
        let name = 'Shouvik'
        console.log(name); 
    }
    chai()


        3.2 one liner array function:
            let chai = () => console.log('chai');          non need of return statement
        3.3 one liner array function:
            let chai = () => (console.log('chai'));        non need of return statement

*/



/*

    

*/