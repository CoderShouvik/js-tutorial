// let arr = ['java', 'cpp', 'ruby', 'js', 'python'];


// let var1 = arr.forEach((items)=>{
    
//     console.log(items);
//     return items;                                       //foreach loop return nothing. Even if you return manually
        
// })

// console.log(var1);



// const myNums = [1, 2, 3, 4, 5, 6 ,7,  8, 9, 10];

// console.log(myNums);
// 
// let newMum = myNums.filter((i) => i > 5 )                 // unlike the foreach loop filter returns value
// let newMum = myNums.filter((i) => {
//     i > 5;                                                    // this won't return value bcz return is missing. In implicit returns 'return' is not required. but in this cae it's required
// } )    


// let newNum = myNums.filter((i) => {
//     return i > 5;                                                    
// } )



// to do the same thing in foreach
// let newNum = [];

// myNums.forEach( (i)=>{
//     if(i>4)
//         {
//             newNum.push(i)
//         }
// });

// console.log(newNum);

let books = [
    {title: 'book1',  genre: 'fiction',         publish: 1981, edition: 2012},
    {title: 'book2',  genre: 'non-fiction',     publish: 1986, edition: 2019},
    {title: 'book3',  genre: 'horror',          publish: 1991, edition: 2010},
    {title: 'book4',  genre: 'fiction',         publish: 2004, edition: 2020},
    {title: 'book5',  genre: 'horror',          publish: 1981, edition: 2017},
    {title: 'book6',  genre: 'science-fiction', publish: 2001, edition: 2013},
    {title: 'book7',  genre: 'adventure',       publish: 1999, edition: 2007},
    {title: 'book8',  genre: 'adventure',       publish: 1981, edition: 2000},
    {title: 'book9',  genre: 'biography',       publish: 1987, edition: 2022},
    {title: 'book10', genre: 'horror',          publish: 2008, edition: 2021},
]


let chosenBook = books.filter((bk) => (bk.genre == 'horror'));
// chosenBook = books.filter((bk) => (bk.publish >= 2001));
chosenBook = books.filter((bk) => (bk.publish >= 2001  && bk.genre == 'horror'));
console.log(chosenBook);