const level = 100;
if(level >200)
    {
        var power = 'Fly';
        console.log(`Your Power is ${power}`);
    } 
    console.log(`Your Power is ${power}`);


// very bad way of eriting  ---->

if(level == 100) console.log('Your level is 100');  //implicit scope
if(level == 100) console.log('Your level is 100'),  //writing multiple lines in implicit scope with a ','
console.log('Second line');                         