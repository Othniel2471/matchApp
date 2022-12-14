const btn = document.querySelector(".submit-btn");
const named = document.querySelector("#match");
const shuffle = document.querySelector(".shuffle");
const error = document.querySelector(".alert");
const matches = document.querySelector(".matches");
const matchedHistory = document.querySelector(".history");
const clrBtn = document.querySelector(".clear-btn");

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

// clear list

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
    displayAlert(`${inputValue} added to the list`, "success");
    clrBtn.classList.add("clear-btn-show");
    console.log(array);
  } else {
    displayAlert("field is empty", "danger");
  }
  clearThis(named);
});

// shuffle function
shuffle.addEventListener("click", () => {
  // if (array.length == 0) {
  //   displayAlert("all items have been matched", "danger");
  // }
  // if (array.length % 2 !== 0) {
  //   displayAlert("need's at least two people to make a match", "danger");
  // } else {
  //   displayAlert("new match made", "success");
  // }

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
  // console.log("this is history " + history);
  // console.log(randoms);
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

// display alert
const displayAlert = (text, action) => {
  error.textContent = text;
  error.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    error.textContent = "";
    error.classList.remove(`alert-${action}`);
  }, 1000);
};

// clear items
const clearItems = () => {
  const items = document.querySelectorAll(".match-item");
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  displayAlert("list emptied", "danger");
};

clrBtn.addEventListener("click", clearItems);
clrBtn.addEventListener("click", () => {
  if (clearItems) {
    clrBtn.classList.remove("clear-btn-show");
    matches.innerHTML = "";
    history.length = 0;
    matchedHistory.innerHTML = "";
  }
});
