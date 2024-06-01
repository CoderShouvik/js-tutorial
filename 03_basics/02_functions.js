// function func1(...num1)
function func1(val1, val2, ...num1)    //val1 will take first value and val2 will take 2nd value and rest of the values in num1
{
    console.log(num1);
}


func1(12, 23, 34, 45, 200, 345, 321, 200);



let user = {
    name: 'Shouvik',
    gender: 'male'
}



function fun2(anyObject)
{
    console.log(` My name is ${anyObject.name} and my gender is ${anyObject.gender}.`);
}

fun2(user);
fun2({
    name: 'Bond James Bond',
    gender: 'male'
});


let myArray = [111, 222, 333, 444, 555, 666, 777, 888, 999];

function arrayPrinter(getArray)
{
    return getArray[2];
}


console.log(arrayPrinter(myArray))
