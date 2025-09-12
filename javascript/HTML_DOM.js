console.log(document.title);
document.title = "Learning Web Development";
console.log(document.title);

const body = document.body;
body.append("hello world");

const h1 = document.createElement("h1");
h1.textContent = "learn web development";
body.append(h1);
console.log(h1);

const p = document.createElement("p");
p.innerText = "HTML DOM";
body.append(p);
console.log(p);

const username = document.createElement("i");
username.innerHTML = "haidilfitra";
body.append(username);
console.log(username);

const hr = document.createElement("hr");
body.append(hr);
hr.style.background = "tomato";

// ---------------------------------------------

// ( . ) for class and ( # ) for id
const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");

const btn1DefText = "Click Me";
btn1.append(btn1DefText);

btn1.addEventListener("mouseover", function () {
  const addName = document.createElement("h2");
  addName.textContent = "haidil";
  body.append(addName);
  console.log(addName);

  btn1.addEventListener("mouseout", function () {
    addName.style.color = "red";
  });
});

// ------------------------------------------------

btn2.style.background = "red";
btn2.style.padding = "8px";
btn2.style.border = "none";

const defText = "Change Color";
btn2.append(defText);

function changeColor() {
  console.log("test");
  btn2.style.background = "aqua";
  const newtxt = document.createElement("i");
  newtxt.textContent = "haidil";
  body.append(newtxt);
}

function changeText() {
  btn2.textContent = "yeaah";
}

function changeTodef() {
  btn2.textContent = defText;
}

// -----------------------------------------
