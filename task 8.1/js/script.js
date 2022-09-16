let obj = {
  name: 'Adil',
  hometown: 'Almaty',
  age: 30
}


function myFunc(obj) {
  let result = [obj.name, obj.hometown, obj.age];
  let objInfo = result.join(', ');
  return objInfo;
}
 
console.log(myFunc(obj));