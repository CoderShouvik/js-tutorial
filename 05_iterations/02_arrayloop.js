let arr = [1,2,3,4,5,6,7,8,9];
for (const nums of arr) {
    console.log(nums);
}

let map = new Map();

map.set('In', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');
map.set('Ban', 'Bangladesh');


// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


let myOb = {
    name: 'Shouvik',
    roll: 127
}

// console.log(myOb);
for (const [key, val] of myOb) {
    console.log(key);
}
