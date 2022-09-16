let students = [
      {name:'Andy', age: 20},
      {name:'Teddy', age: 16},
      {name:'Barny', age: 21},
      {name:'Marshel', age: 22},
      {name:'Robin', age: 19},
    ];

  students.sort((a, b) => a.age - b.age);

  console.log(students);