// let obj = {
//     "sname":"geetansh"
// }

// let obj1 = {
//     "sname":"geetansh"
// }

// let a = 5;
// let b = 5;

// console.log(obj == obj1);
// console.log(a == b);




// let obj = {
//     "sname":"geetansh"
// }

// let obj1 = obj

// let a = 5;
// let b = a;

// console.log(obj === obj1);
// console.log(a === b);



// let obj = {
//     "sname":"geetansh",
//     "age":22
// }
// let obj1 = obj;

// obj1.sname = "jain"  =>   same ref


let obj = new Object();
obj.name = "geet";
obj.age = 22;

let obj1 = obj;
obj1.name = "jain";
obj1.age = 23;

console.log(obj);
console.log(obj1);

