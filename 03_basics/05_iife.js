
// This is called IIFE ---> Immediately Invoked Function Expression it's used so that that global scope's  variables don't pollute the function.

(function mountain()          //This is called named IIFE
{
    console.log('This is a mountain.');
})();   //This semicolone is important to write two IIFEs back to back


((name) => {                //This is called IIFE
    console.log(`This is a river. ${name}`);
})('Ganga');