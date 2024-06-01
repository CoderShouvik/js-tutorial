function sayMyName(){
    console.log(`First name: Shouvik`);
    console.log(`Last name: Sarkar`);
}


// sayMyName();

function addTwoNumbers(a, b){
    console.log(a+b);
    // return a+b;
}

// console.log(addTwoNumbers(12,2));
// console.log(addTwoNumbers(15, 45));

// let result = addTwoNumbers(15, 45);
// console.log(`result: ${result}`);




function userLoginMessage(userName){

    if(!userName )
        {
            console.log( `please enter a user name.`);
            return;
        }
    return `${userName} just logged in`;
}
function userLoginMessage2(userName = 'Sam'){

  
    return `${userName} just logged in`;
}

console.log(userLoginMessage());
console.log(userLoginMessage2());