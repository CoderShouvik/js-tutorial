//destructuring

let myCourse = {
    topic: 'React',
    courseInstructor: 'Shouvik Sarkar',
    price: 999
}

const {courseInstructor : teacher} = myCourse;

console.log(courseInstructor);
console.log(teacher);

