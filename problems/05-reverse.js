/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:


***********************************************************************/

reverse = (string, array = string.split(""), finalArr = []) => {
  if(array.length === 0){
    return finalArr.join("")
  }

  let last = array.pop()
  finalArr.push(last)

  return reverse(string, array, finalArr)
}

console.log(reverse("house")); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
console.log(reverse("")); // ""
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
