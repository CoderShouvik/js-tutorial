let a = 200;
if(true)
    {
        let a = 20;
        // console.log('Inner: ', a);
    }
    // console.log('Outer: ', a);


if(true)
{
    let name = 'Shouvik';
    if(name === 'Shouvik')
    {
        let website = 'Git-Hub';
        // console.log(name+' '+website);
    }
    // console.log(website);
}

// console.log(website);
// console.log(name);


function fun1()
{
    let name = 'Shouvik';
    function fun2(){
        let website = 'Git-Hub';
        console.log(name+''+website);
    }

    fun2();
}
fun1();


tradFunction()
function tradFunction(){
    console.log('Hey this is a trad Function.')
}


let varFunction = function(){
    console.log('This is a function stored a variable');
}
varFunction()