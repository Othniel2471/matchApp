const btn = document.querySelector(".btn");
const named = document.querySelector("input");
const shuffle = document.querySelector(".shuffle");
let list = document.getElementById("list");
const form = document
  .querySelector("form")
  .addEventListener("click", (event) => {
    event.preventDefault();
  });

let array = [];
let shuffled = [];
// ajs array is an empty array that does not return anything
let ajArray = [];
// history keeps track of all the deleted names
let history = [];

btn.addEventListener("click", () => {
  let inputValue = named.value;
  if (inputValue !== "") {
    array.push(inputValue);
    let li = document.createElement("li");
    li.innerText = inputValue;
    list.appendChild(li);
  } else {
    console.log("field is empty");
  }
  clearThis(named);
});

// shuffle function
shuffle.addEventListener("click", () => {
  if (array.length === 2) {
    shuffle.disabled = true;
  }

  randomMatch(array, 2);

  // loop thrugh shuffle last index
  ajArray = shuffled[shuffled.length - 1].filter(function (item) {
    // check if its items includes the current array
    if (array.includes(item)) {
      // console.log(item);
      // get the index
      // console.log(array.indexOf(item));
      // push, spread and splice it
      history.push(...array.splice(array.indexOf(item), 1));
    }
    console.log("i am the remaining array after splice");
    console.log(array);

    console.log("i keep track of the removed items");
    console.log(history);
  });

  // console.log(array.splice(randoms, 2));
});

// clear input field
const clearThis = (target) => {
  target.value = "";
};

// shuffle items in  array
const randomMatch = (arr, n) => {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  let randoms = result;
  shuffled.push(randoms);
  // array.splice(shuffled[randoms]);
  return console.log(randoms);
};

// testing logic

// var array2 = [["aj", "joh"], ["mimi", "ot"]];
// // var array0 = ["aj", "t", "y", "mimi"];
// var array1 = ["aj", "ti", "ot", "j", "ty", "ut"];

// var array3 = array2[1].filter(function (item) {

//   if (array1.includes(item)) {
//     console.log(item);
//     console.log(array1.indexOf(item));
//     return item;
//   }
// });

// // console.log(array3);

// console.log(randomMatch(array1, 2));
