const firstName = "qwert";
const lastName = "iop";

const fullName1 = firstName + " " + lastName;
const fullName2 = `${firstName} ${lastName}`;

console.log(fullName2);

const student = {
  name: "Kiran Chhetri",
  roll: 213,
  phone: [1234, 5678, 9876],
};

const fullNAme = student.name;
const { name, roll, phone } = student;

console.log(student.name);
console.log(name);

console.log(phone);

const [num1, num2, num3] = phone;
console.log(num1);

//Array of object

const users = [
  {
    id: 1,
    name: "Hari",
  },
  {
    id: 1,
    name: "Hari",
  },
  {
    id: 1,
    name: "Hari",
  },
];

const user = [{ id: 3, name: "Ramu" }];

const newUser = [...users, user];

console.log(newUser);
// console.log(users);

//object
// const newUSers=[...users, age :20];
// console.log(newUSers)
