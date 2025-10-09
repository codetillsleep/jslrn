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
