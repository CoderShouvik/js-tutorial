let tinderUser = new Object();
tinderUser.name = 'Shouvik';
tinderUser.id = '123';
tinderUser.age = 23;

console.log(tinderUser)


let regularUser = {
    id: '234',
    name: {
        fullName: {
            firstName: 'Shouvik',
            lastName: 'Sarkar'
        }
    }
}

console.log(regularUser.name.fullName.lastName);


let ob1 = {1:'a', 2: 'b'};
let ob2 = {3:'c', 4: 'd'};
let ob3 = {5:'e', 6: 'f'};

// let obn = {ob1, ob2};
// let obn = Object.assign( ob1, ob2, ob3);
// let obn = Object.assign({}, ob1, ob2, ob3); // adding {} is a good practice as {} is the target here and the ob1 and ob2 are the sources, so the values of obn are stored in {},
let obn = { ...ob1, ...ob2, ...ob3 };

console.log(obn)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('age'));
