const body = document.querySelector("body");

const switcher = document.querySelector(".switch");
const circle = document.querySelector(".switch-circle");

circle.addEventListener("click", () => {
  if (switcher.classList.contains("dark")) {
    switcher.removeChild(document.getElementById("moon"));
    const light = document.createElement("img");
    light.src = "assets/sun.svg";
    light.id = "sun";
    light.alt = "sun";
    light.classList.add("icon");
    switcher.classList.remove("dark");
    switcher.classList.add("light");

    circle.id = "light";
    switcher.appendChild(light).focus();

    body.style.backgroundColor = "#f1f1f1";
  } else if (switcher.classList.contains("light")) {
    switcher.removeChild(document.getElementById("sun"));
    const moon = document.createElement("img");
    moon.src = "assets/moon.svg";
    moon.id = "moon";
    moon.alt = "moon";
    moon.classList.add("icon");
    switcher.classList.remove("light");
    switcher.classList.add("dark");

    circle.id = "dark";
    switcher.insertBefore(moon, switcher.childNodes[0]).focus();

    body.style.backgroundColor = "#292c35";
  }
});
