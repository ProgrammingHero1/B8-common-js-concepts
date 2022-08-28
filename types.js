// strongly typed Language
// int a = 5;
// string b = 'alim halim khalim';
// bool c = True;
// object student = { name: 'noya dhman', id: 55}
// int[] numbers = [12, 45, 78]
// string[] friends = ['abul', 'babul'];

// JavaScript is a dynamic typed Language

// primitive type
const a = 5;
const b = 'Samsu kopai na ekhon ar';
const d = true;


// non-primitive 
const ages = [45, 65, 48];
const student = {id: 23, class: 7};

// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'}
let q = p;
q.job = 'front end developer';
console.log(p, q);