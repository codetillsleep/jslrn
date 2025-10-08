// example-1
document.getElementById("changeTextButton").addEventListener("click", () => {
  let para = document.getElementById("mypara");
  para.textContent = " this is the changed text";
});

//example-2
let clicker_1 = document.getElementById("sel2");

clicker_1.addEventListener("click", () => {
  const urlToOpen = "https://www.google.com";
  window.open(urlToOpen, "_blank");
});
