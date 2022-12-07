const btn = document.querySelector(".submit-btn");
const named = document.querySelector("#match");
const shuffle = document.querySelector(".shuffle");
const error = document.querySelector(".alert");
const matches = document.querySelector(".matches");
const matchedHistory = document.querySelector(".history");

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
  const inputValue = named.value;
  const id = new Date().getTime().toString();

  if (inputValue !== "") {
    array.push(inputValue);
    let element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("match-item");
    element.innerHTML = `<p class ="title">${inputValue}</p>`;
    list.appendChild(element);
  } else {
    console.log("field is empty");
    error.textContent = "field is empty";
  }
  clearThis(named);
});

// display alert
const displayAlert = (text, action) => {
  error.textContent = text;
  error.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(() => {
    error.textContent = "";
    error.classList.add(`alert -${action}`);
  }, 1000);
};

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
      array.splice(array.indexOf(item), 1).join(" ");
      // history.push(...array.splice(array.indexOf(item), 1));
    }
    // console.log("i am the remaining array after splice");
    console.log(array);
    // console.log("i keep track of the removed items");
    // console.log(history);
  });
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
  matches.innerHTML = `<h3>matches</h3>
        <p>${result[0]} you've been matched with ${result[1]}</p>`;
  history.push(`<p>${result[0]} you've been matched with ${result[1]}</p>`).jo;
  matchedHistory.innerHTML = history;
  console.log(history);
  console.log(randoms);
  return randoms;
};

// modal function
const openBtn = document.querySelector(".modal-btn");
const overlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  overlay.classList.add("open-modal");
});
closeBtn.addEventListener("click", () => {
  overlay.classList.remove("open-modal");
});
// overlay.addEventListener("click", () => [
//   overlay.classList.remove("open-modal"),
// ]);
