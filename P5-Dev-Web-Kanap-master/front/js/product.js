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
const displayProduct = () => {
  fetchApi().then((data) => {
    for (element of data) {
      if (element._id === urlId) {
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

displayProduct();
// let productId;

// //récupérer la couleur
// let colorChoice;
// document.querySelector("#colors").addEventListener("change", (event) => {
//   colorChoice = event.target.value;
// });

// //Récupérer la quantité sélectionnée
// let quantityChoice;
// document.querySelector("#quantity").addEventListener("input", (event) => {
//   quantityChoice = event.target.value;
// });

// //Récupération et stockage des données à envoyer au localstorage
// let addToStorage = {
//   id: productId,
//   color: colorChoice,
//   quantity: quantityChoice,
// };

document.querySelector("#addToCart").addEventListener("click", () => {
  let color = document.querySelector("#colors").value;
  console.log(color);
  if (color == "") {
    alert("Veuillez choisir une couleur avant de d'ajouter au panier");
    return;
  }
  localStorage.setItem("product", JSON.stringify(addToStorage));
});

// displayProduct();

//methode find js https://www.digitalocean.com/community/tutorials/js-array-search-methods-fr#find
// const alligator = ["thick scales", 80, "4 foot tail", "rounded snout"];

// alligator.find(el => el.length < 12); // returns '4 foot tail'
