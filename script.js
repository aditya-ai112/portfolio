// Typing Effect
const text = "Aditya Jadhav";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

// Scroll Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    let top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// Cursor Glow
document.addEventListener("mousemove", (e) => {
  const glow = document.getElementById("cursorGlow");
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Form + LocalStorage
const form = document.getElementById("form");
const list = document.getElementById("list");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let msg = document.getElementById("msgBox").value.trim();

  if(name === "") return alert("Name required");
  if(!email.includes("@")) return alert("Invalid email");

  let data = {name, email, msg};

  let old = JSON.parse(localStorage.getItem("feedback")) || [];
  old.push(data);
  localStorage.setItem("feedback", JSON.stringify(old));

  form.reset();
  showData();
});

function showData() {
  list.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("feedback")) || [];

  data.forEach(d => {
    let div = document.createElement("div");
    div.innerHTML = `<b>${d.name}</b><p>${d.msg}</p>`;
    list.appendChild(div);
  });
}

showData();