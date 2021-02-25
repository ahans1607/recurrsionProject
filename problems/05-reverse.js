/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

***********************************************************************/

function reverse(string, array = string.split(""), finalArr = []){
  if (!array.length){
    return finalArr.join("")
  }

  let last = array.pop();
  finalArr.push(last)

  return reverse(string, array, finalArr)

}




console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
