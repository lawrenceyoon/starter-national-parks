// Query selector method accepts a string representing a CSS selector!
// const getHeading = document.querySelector("h1");
// console.log(getHeading);

// // QuerySelectorAll returns all matches in array-like format
// // 1 way
// const allParkDisplay = document.querySelectorAll(".park-display");
// const getFirstParkDisplay = document.querySelectorAll(".park-display")[1]; // gets specific .park-display
// console.log(getFirstParkDisplay);
// // to console log all items:
// for (let i = 0; i < allParkDisplay.length; i++) {
//   console.log(allParkDisplay[i]);
// }

// // querySelector
// const getFirstClassValue = document.querySelector(".value");
// console.log(getFirstClassValue);

// const getFirstButtonElement = document.querySelector("button");
// console.log(getFirstButtonElement);

// const getElementClassArea = document.querySelector(".area");
// console.log(getElementClassArea);

// const getDescendantClassStat = document.querySelector(".stat div");
// console.log(getDescendantClassStat);

// const getElementClassHello = document.querySelector(".hello");
// console.log(getElementClassHello);

//
//
// querySelectorAll (two ways to iterate)
// const buttons = document.querySelectorAll("button");
// for (let element of buttons) {
//   console.log(element);
// }
// for (let i = 0; i < buttons.length; i++) {
//   console.log(buttons[i]);
// }

//
//
// Do this querySelectorAll
// const getAllRatings = document.querySelectorAll(".rating-display .value");
// for (let element of getAllRatings) {
//   console.log(element);
// }

// const getAreaDisplay = document.querySelectorAll(".area-display");
// for (let i = 0; i < getAreaDisplay.length; i++) {
//   console.log(getAreaDisplay[i]);
// }

//
//
// // innerText, textContent, innerHTML (add to DOM) property
// const getAllH2 = document.querySelectorAll("h2");
// for (let element of getAllH2) {
//   console.log(element.innerText);
// }

// //

// const getAllDescriptionDisplay = document.querySelectorAll(
//   ".description-display"
// );

// for (let description of getAllDescriptionDisplay) {
//   let text = description.innerText;

//   if (text.length > 250) {
//     text = text.slice(0, 250);
//     text += '<a href="#">...</a>';
//   }
//   // description.innerText = text; // doesn't change the <a href> into code (will just write out <a href as text>)
//   // description.textContent = text; // doesn't change the <a href> into code (will just write out <a href as text>)
//   description.innerHTML = text; // changes <a href> to code
// }

//
//
// // Changing style
// const ratings = document.querySelectorAll(".rating-display .value");

// for (let rating of ratings) {
//   let ratingValue = Number(rating.innerText);

//   if (ratingValue > 4.7) {
//     rating.style.fontWeight = "bold";
//     rating.style.color = "#3ba17c";
//   }
// }

//
//
// // ClassList property (add or remove classes from CSS)
// const ratings = document.querySelectorAll(".rating-display .value");

// for (let rating of ratings) {
//   console.log(rating);
//   let ratingValue = Number(rating.textContent);
//   console.log(ratingValue);

//   if (ratingValue > 4.7) {
//     rating.classList.add("high-rating");
//     rating.classList.remove("value");
//   }
// }

//
//
// // Creating DOM elements (create element with JS, then add to page using appendChild)
// // ADDING (appendChild)
// const parks = document.querySelectorAll(".park-display");
// const numberParks = parks.length;
// const newElement = document.createElement("div");

// newElement.innerText = `${numberParks} exciting parks to visit`;
// newElement.classList.add("header-statement");

// const header = document.querySelector("header");
// header.appendChild(newElement);

// // REMOVING (removeChild)
// // Get the parent element of all parks
// const main = document.querySelector("main");
// console.log(main);
// // Select a single park
// const park = main.querySelector(".park-display");
// console.log(park);
// // Remove that park
// main.removeChild(park);

// // Another example of removing
// const header = document.querySelector("header");
// const h1 = document.querySelector("h1");
// header.removeChild(h1);
