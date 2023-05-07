//task1
function find_duplicate_in_array(arra1) {
  var object = {};
  var result = [];

  arra1.forEach(function (item) {
    if(!object[item])
        object[item] = 0;
      object[item] += 1;
  })

  for (var prop in object) {
     if(object[prop] >= 2) {
         result.push(prop);
     }
  }

  return result;

}

console.log(find_duplicate_in_array([1, 2, 3, 1, 4]));
//task2
var list = [10,20,30,40]; 
function maxElement (list){
    let max;
    let min = list[0];
    for(let i = 0; i < list.length; i++){
        if((list[i]) < min){
            min = list[i]; 
        } else {
            max = list[i];
        }
    }
    return max;
}

console.log(maxElement(list));

//task3
let myArr=[2, 3, 4, 5]
let myArr2 = []
function doubleArr(myArr){
    for(i=0;i<myArr.length;i++){
        myArr2= myArr*2
    }
    return myArr2
}
console.log(doubleArr)