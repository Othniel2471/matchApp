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
  randomMatch(array, 2);
  console.log(shuffled);
  console.log(array);
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
