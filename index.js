"strict";
const html = document.querySelector("html");
const body = document.querySelector("body");
const heading = document.querySelector(".title");
const main = document.querySelector(".main");
const category = document.querySelectorAll(".category");
const foodItem = document.querySelectorAll(".food-item");
const foodCategory = document.querySelectorAll(".food-category");
const allergyWarning = document.querySelector(".allergy-warning");
const warning = document.getElementById("warning");
const allergyContainer = document.querySelector(".allergies");
const allergyInfo = document.querySelectorAll(".allergy-info");
const allergyInfoEven = document.querySelectorAll(
  ".allergy-info:nth-child(even)"
);
const footer = document.querySelector(".footer");
const footerDesc = document.querySelectorAll(".food-desc");

// Change the style
// Html reset

html.style.fontSize = "62.5%";

// Body styling

body.style.fontFamily = "Optima";
body.style.fontSize = "1.6rem";
body.style.width = "60%";
body.style.margin = "auto";

// Heading styling

heading.style.textAlign = "center";
heading.style.fontSize = "6rem";

// Main styling
main.style.display = "flex";
main.style.justifyContent = "space-between";
main.style.gap = "3rem";

// Categories styling

category.forEach((el) => (el.style.fontSize = "4rem"));
category.forEach((el) => (el.style.borderBottom = "4px solid"));
category.forEach((el) => (el.style.display = "block"));
category.forEach((el) => (el.style.marginBottom = "3rem"));

// Food Items styling

foodItem.forEach((el) => (el.style.marginTop = "1rem"));

// Allergy warning section styling

allergyWarning.style.marginBottom = "10rem";

// Warning styling

warning.style.fontSize = "3rem";
warning.style.textAlign = "center";

// Allergy container styling

allergyContainer.style.fontSize = "2.5rem";
allergyContainer.style.marginLeft = "30rem";
allergyContainer.style.width = "50rem";

// allergy-info styling

allergyInfo.forEach((el) => (el.style.marginBottom = "1rem"));

allergyInfo.forEach((el) => (el.style.listStyle = "none"));
allergyInfo.forEach((el) => (el.style.marginTop = "0.5rem"));

// Allergy-info even styling

allergyInfoEven.forEach((el) => (el.style.backgroundColor = "skyblue"));

allergyInfoEven.forEach((el) => (el.style.marginTop = "0.5rem"));

// Footer styling

footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.gap = "5rem";
footer.style.marginBottom = "15rem";

// Footer-desc styling

footerDesc.forEach((el) => (el.style.border = " 5px solid orange"));
footerDesc.forEach((el) => (el.style.padding = " 3.5rem"));
footerDesc.forEach((el) => (el.style.borderRadius = " 100%"));
footerDesc.forEach((el) => (el.style.height = " 7rem"));
footerDesc.forEach((el) => (el.style.width = " 7rem"));
footerDesc.forEach((el) => (el.style.display = " flex"));
footerDesc.forEach((el) => (el.style.justifyContent = " center"));
footerDesc.forEach((el) => (el.style.alignItems = " center"));
footerDesc.forEach((el) => (el.style.margin = "1rem"));

// Color generator

const colorGenerator = () => {
  const random = Math.floor(Math.random() * 10) + 1;

  const arr = [
    "background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);",
    "background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);",
    "background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);",
    "background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);",
    "background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);",
    "background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);",
    "background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);",
    "background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);",
    "background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);",
    "background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);",
  ];
  const arr1 = [
    "rgb(0,0,128,0.3)",
    "rgb(0,0,255, 0.3)",
    "rgb(0,128,0, 0.3)",
    "rgb(0,255,255, 0.3)",
    "rgb(128,0,128, 0.3)",
    "rgb(128,128,0, 0.3)",
    "rgb(255,0,255, 0.3)",
    "rgb(255,255,0, 0.3)",
    "rgb(0,128,128, 0.3)",
    "rgb(0,255,0, 0.3)",
  ];

  return arr1[random];
};

foodCategory.forEach((el) => (el.style.backgroundColor = colorGenerator()));
foodCategory.forEach((el) => (el.style.padding = "7rem"));

// Media Query

const mediaQuery = window.matchMedia("(max-width:1000px)");
console.log(mediaQuery);

const callBack = (bp) => {
  if (bp.matches) {
    main.style.flexDirection = "column";
    main.style.alignItems = "center";
    footer.style.flexDirection = "column";
    allergyContainer.style.marginLeft = "0rem";
  } else {
    main.style.flexDirection = "row";
    main.style.justifyContent = "space-between";
    footer.style.flexDirection = "row";
  }
};

mediaQuery.addListener(callBack);
callBack(mediaQuery);
