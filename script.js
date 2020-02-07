let dog__breed = document.querySelector("#dog__breed");
let dog__info = document.querySelector("#dog__info");
let aussie = document.querySelector(".aussie");
aussie.addEventListener("click", dogNameGenerator);
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
let dogLink = document.querySelectorAll(".link");
let dogArray = [23, 36, 41, 50, 68, 71, 149, 177, 222, 226];
for (i = 0; i < dogArray.length; i++) {
  fetch(`${baseUrl}${dogArray[i]}`, {
    headers: {
      "x-api-key": "d95fa56a-2c05-4a28-b011-65e14b05b28b"
    }
  })
    .then(res => {
      console.log("success", res);
      return res.json();
    })
    .then(res => {});
}

/* Aussie - 23
Malinois - 36
Bernese - 41
Border Collie - 50
Corgi - 68
Cavalier - 71
Labrador - 149
Toller - 177
Shiba Inu - 222
Siberian Husky - 226
*/
