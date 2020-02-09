let baseUrl = "https://api.thedogapi.com/v1/images/search?breed_ids=";

//Fetch to pull all the correct indices for the 10 dog breeds
const dogs = {};
let dogLink = document.querySelectorAll(".link");
let dogArray = [10, 23, 36, 41, 71, 125, 149, 184, 177, 226];
function fetchData() {
  for (i = 0; i < dogArray.length; i++) {
    fetch(`${baseUrl}${dogArray[i]}`, {
      headers: {
        "x-api-key": "d95fa56a-2c05-4a28-b011-65e14b05b28b"
      }
    })
      .then(res => {
        //   console.log(res);
        return res.json();
      })
      .then(data => {
        //   console.log(data);
        let newDogAttributes = {
          name: data[0].breeds[0].name,
          bredFor: data[0].breeds[0].bred_for || "Love",
          group: data[0].breeds[0].breed_group,
          temperament: data[0].breeds[0].temperament,
          dogImage: data[0].url
        };
        dogs[data[0].breeds[0].id] = newDogAttributes;
        addToList(data);
      });
  }
}
function addToList(dog) {
  const dogItem = document.createElement("li");
  const dogLink = document.createElement("a");
  dogLink.setAttribute("data-breed", dog[0].breeds[0].id);
  dogLink.innerHTML = dog[0].breeds[0].name;
  dogLink.classList.add("dogLink");
  dogLink.addEventListener("click", displayDog);
  dogItem.classList.add("dogListItem");
  dogItem.appendChild(dogLink);
  document.querySelector(".nav__list").appendChild(dogItem);
}
console.log(dogs);

//Hamburger slider function
let navList = document.querySelector(".nav__list");
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", openMenu);
function openMenu(e) {
  e.preventDefault();
  navList.classList.toggle("nav__list--is-open");
}

function displayDog(e) {
  e.preventDefault();
  openMenu(e);
  const selectedDog = this.dataset.breed.toString();
  let dogBreed = document.querySelector("#dog__breed");
  let dogBreedGroup = document.querySelector(".dog__breed__group__value");
  let dogBredFor = document.querySelector(".dog__bred__for__value");
  let dogTemperament = document.querySelector(".dog__temperament__value");
  let dogImage = document.querySelector(".dog__image");
  dogBreed.innerHTML = dogs[selectedDog].name;
  dogBreedGroup.innerHTML = dogs[selectedDog].group;
  dogBredFor.innerHTML = dogs[selectedDog].bredFor;
  dogTemperament.innerHTML = dogs[selectedDog].temperament;
  dogImage.setAttribute("src", dogs[selectedDog].dogImage);
  let overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
  let rendered = document.querySelector(".rendered");
  rendered.classList.add("active");
}

fetchData();
