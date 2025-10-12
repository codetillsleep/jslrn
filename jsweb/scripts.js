// example-1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let para = document.getElementById("mypara");
    para.textContent = " this is the changed text";
  });

//example-2

document.getElementById("HighlightCity").addEventListener("click", function () {
  let citiesList = document.getElementById("cities");
  citiesList.firstElementChild.classList.add("highlight");
});

//example-3

document.getElementById("ChangeOrder").addEventListener("click", function () {
  let CoffeeList = document.getElementById("coffeeType");
  CoffeeList.textContent = "Espresso";
  CoffeeList.style.backgroundColor = "Brown";
});
//example-4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newitem = document.createElement("li");
  newitem.textContent = "eggs";

  let shoppingList = document.getElementById("shoppingList");
  shoppingList.appendChild(newitem);
});

//example-5
document
  .getElementById("removeLastItem")
  .addEventListener("click", function () {
    document.getElementById("taskList").lastElementChild.remove();
  });

//example-6

document.getElementById("clickme").addEventListener("click", function () {
  alert("never use alerts,unless needed its not user friendly ");
});

//example-7

document.getElementById("itmlist").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".itm")) {
    alert("You selected :" + event.target.textContent);
  }
});
//example-8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `feedback is: ${feedback}`;
  });
//example-9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent =
    "dom fully loaded at this point";
});

//example-10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    document.getElementById("descriptionText").classList.toggle("highlight");
  });
