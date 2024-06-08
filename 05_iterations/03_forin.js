let myOb = {
    cpp: 'C++',
    js: 'Java Script',
    rb: 'ruby',
    py: 'python',
}

// for (const key in myOb) {
//     console.log(key,': ', myOb[key]);
// }


// let arr = ['java', 'cpp', 'ruby', 'js', 'python'];

// for (const key in arr) {
//     console.log(arr[key]);
// }

let map = new Map();

map.set('In', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');
map.set('Ban', 'Bangladesh');


// console.log(map);

for (const [key ]in map) {
    console.log(key );
}