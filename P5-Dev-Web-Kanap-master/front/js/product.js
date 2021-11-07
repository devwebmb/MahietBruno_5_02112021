// http://localhost:3000/api/products

let api = "http://localhost:3000/api/products";
let urlData = new URLSearchParams(window.location.search);
// console.log(urlData);
let urlId = urlData.get("id");
// console.log(urlId);
//récupération des données dans l'api
const fetchApi = () => {
  return fetch(api)
    .then((response) => response.json())
    .catch((err) => console.log("erreur : " + err));
};

//Insertion des données dans le dom, product.html et dans le panier
// const displayProduct = () => {
//   fetchApi().then((data) => {
//     for (element of data) {
//       if (element._id === urlId) {
//         document.querySelector(
//           "body > main > div > section > article > div.item__img"
//         ).innerHTML = `<img src="${element.imageUrl}" alt="${element.altTxt}"></img>`;
//         document.querySelector("#title").innerHTML = `${element.name}`;
//         document.querySelector("#price").innerHTML = `${element.price}`;
//         document.querySelector(
//           "#description"
//         ).innerHTML = `${element.description}`;
//         let colors = element.colors;
//         for (i = 0; i < colors.length; i++) {
//           document.querySelector(
//             "#colors"
//           ).innerHTML += `<option value=${colors[i]}>${colors[i]}</option>`;
//         }
//       }
//     }
//   });
// };

// displayProduct();
let productId;

const displayProduct = () => {
  fetchApi().then((data) => {
    // console.log(data);
    for (element of data) {
      // insertion des données dans le dom en fonction du canapé choisi en page d'accueil
      if (element._id === urlId) {
        productId = element._id;
        document.querySelector(
          "body > main > div > section > article > div.item__img"
        ).innerHTML = `<img src="${element.imageUrl}" alt="${element.altTxt}"></img>`;
        document.querySelector("#title").innerHTML = `${element.name}`;
        document.querySelector("#price").innerHTML = `${element.price}`;
        document.querySelector(
          "#description"
        ).innerHTML = `${element.description}`;
        let colors = element.colors;
        for (i = 0; i < colors.length; i++) {
          document.querySelector(
            "#colors"
          ).innerHTML += `<option value=${colors[i]}>${colors[i]}</option>`;
        }
      }
    }
  });
};

//récupérer la couleur
let colorChoice;
document.querySelector("#colors").addEventListener("change", (event) => {
  colorChoice = event.target.value;
});

//Récupérer la quantité sélectionnée
let quantityChoice;
document.querySelector("#quantity").addEventListener("input", (event) => {
  quantityChoice = event.target.value;
});

const addToLocalStorage = () => {
  //Récupération et stockage des données à envoyer au localstorage
  let addToStorage = {
    id: productId,
    color: colorChoice,
    quantity: quantityChoice,
  };

  //Création d'une variable pour récupérer le localstrorage
  let localStorageContent = JSON.parse(localStorage.getItem("product"));
};

displayProduct();
addToCart();
