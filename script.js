let dogInfo = document.querySelector(".dog__info");
let baseUrl = "https://api.thedogapi.com/v1/breeds";
let dogButton = document.querySelector(".dogButton");
dogButton.addEventListener("click", dogImageGenerator);
// function dogImageGenerator(e) {
//   e.preventDefault();
//   fetch(baseURL, {
//     headers: {
//       "x-api-key": "d95fa56a-2c05-4a28-b011-65e14b05b28b"
//     }
//   })
//     .then(res => {
//       console.log("success", res);
//       return res.json();
//     })
//     .then(res => {
//       let dogImage = res[0].url;
//       randomCatImage.setAttribute("src", randomCatURL);
//     });
// }

// let randomButton = document.querySelector(".randomButton");
// randomButton.addEventListener("click", randomImageGenerator);

// let randomCatImage = document.querySelector(".randomCatImage");
// function randomImageGenerator(e) {
//   e.preventDefault();
//   fetch(baseUrl).catch(err => {
//     console.log("something went wrong", err);
//   });
// }


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
