/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

***********************************************************************/

function subsets(array, finalArr = []){
  if (array.length === 0){
    return [[]]
  };

  let lastEle = array.pop();
  let rec = subsets(array);

    for (let i = 0; i < rec.length; i++){
      let currentEle = rec[i]
      let newArray = currentEle.concat([lastEle])
      finalArr.push(newArray)
    };
};








// const subsets = (array) => {
  
//   if (array.length === 0){
    
//     return [[]];
//   }

  
//   let lastVar = array[array.length - 1]
//   let workingArray = subsets(array.slice(0, array.length - 1))
  
  
//   const mapped = workingArray.map(function(el){
//     let finalArr = el.slice(0)
    
//     finalArr.push(lastVar)
    
//     return finalArr
//   });
  
  
//   return workingArray.concat(mapped)
// }

// console.log(subsets([])) // [[]]
// console.log(subsets([1])) // [[], [1]]
// console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
