let dog__breed = document.querySelector("#dog__breed");
let dog__info = document.querySelector("#dog__info");
let baseUrl = "https://api.thedogapi.com/v1/images/search?breed_ids=";

function dogNameGenerator(e) {
  e.preventDefault();
  fetch(baseUrl, {
    headers: {
      "x-api-key": "d95fa56a-2c05-4a28-b011-65e14b05b28b"
    }
  })
    .then(res => {
      console.log("success", res);
      return res.json();
    })
    .then(res => {
      let dogName = res.name;
      dog__breed.innerText = dogName;
      dog__info.innerText = res["bred_for"];
      console.log(dog__breed);
    });
}

//Fetch to pull all the correct indices for the 10 dog breeds
let dogLink = document.querySelectorAll(".link");
let dogArray = [10, 23, 36, 41, 71, 125, 149, 184, 177, 226];
for (i = 0; i < dogArray.length; i++) {
  fetch(`${baseUrl}${dogArray[i]}`, {
    headers: {
      "x-api-key": "d95fa56a-2c05-4a28-b011-65e14b05b28b"
    }
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => {
      console.log(data);
    });
}
//Hamburger slider function
let navList = document.querySelector(".nav__list");
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", openMenu);
function openMenu(e) {
  e.preventDefault();
  navList.classList.toggle("nav__list--is-open");
}

//res[0].breeds[0].name
//res[0].breeds[0]['bred_for']
//res[0].breeds[0]['breed.group']
//res[0].breeds[0].temperament
//res[2] (for image)
