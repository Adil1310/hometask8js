let students = [
      {name:'Andy', age: 20},
      {name:'Teddy', age: 16},
      {name:'Barny', age: 21},
    ];

let student = students.find(item => item.age < 18);

console.log(student.name)