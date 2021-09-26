// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// assign dishes button
const assignButton = document.querySelector(".assign");
// list of guests' names and their assigned dishes
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

//Additional event listener to listen to an "Enter" key once the user finishes typing a guest's name in the text input box.
guestInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const guest = guestInput.value;
    if (guest !== "") {
      addToList(guest);
      updateGuestCount();
      clearInput();
    }
  }
});

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const clearInput = function () {
  guestInput.value = "";
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "potato salad",
    "hummus",
    "cookies",
    "fruits",
    "spring rolls",
    "noodles",
    "sandwiches",
    "nori rolls",
    "ice-cream cakes",
    "peach tarts",
    "sauerkraut",
    "pasta salad"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length); //This will generate a number between 0 to 11 to pick an index from the array. The floor() method rounds a number DOWNWARDS to the nearest integer and math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
    let randomPotluckItem = potluckItems[randomPotluckIndex]; //This is to select an item from the potluckItems array based on the random index.

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`; //You’re using guest.innerText to access the name inside the li element. If you used guest without innerText, you’d grab the actual list element instead of the text.
    assignedItems.append(listItem);

    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true; //The disabled property disables the button, so that it becomes unusable and un-clickable.
});
