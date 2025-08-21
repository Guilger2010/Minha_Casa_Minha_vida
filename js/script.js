function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./img/luffygera5.jpg");
  } else {
    img.setAttribute("src", "./img/2088222.jpg");
  }
}