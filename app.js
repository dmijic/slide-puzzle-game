const fills = document.querySelectorAll(".fill");
const box = document.querySelectorAll(".box");
const filledBoxes = document.querySelectorAll(".filled");
let index = [];
let i = 0;
let fillBox;

fills.forEach(fill => {
  fill.addEventListener("dragstart", dragStart);
  fill.addEventListener("dragend", dragEnd);
});

box.forEach(empty => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

function dragStart() {
  this.className += " hold";
  this.parentElement.classList.add("empty", "box");
  this.parentElement.classList.remove("filled");
  setTimeout(() => (this.classList.add("invisible"), 0));
  fillBox = this;
}

function dragEnd() {
  this.classList.remove("invisible", "hold");
  this.parentElement.classList.add("filled");
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += " hover";
}
function dragLeave() {
  this.classList.remove("hover");
}

function dragDrop(e) {
  e.preventDefault();
  if (this.classList.contains("empty")) {
    this.classList.add("filled");
    this.append(fillBox);
    this.classList.remove("empty");
  }
}

function newGame() {
  alert("new game");
  for (i = 1; i < 10; i++) {
    index[i - 1] = i;
  }
  console.log(index);
  index = shuffle(index);
  console.log(index);
  i = 0;
  filledBoxes.forEach(box => {
    console.log(index[i]);
    box.firstElementChild.classList = "fill img" + index[i];
    i++;
  });
}

function shuffle(array) {
  let tempArr = [];
  while (array.length > 0) {
    let rand = Math.floor(Math.random() * array.length);
    tempArr.push(array[rand]);
    array.splice(rand, 1);
  }
  return tempArr;
}
