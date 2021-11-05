// http://localhost:3000/api/products

let api = "http://localhost:3000/api/products";
let urlData = new URLSearchParams(window.location.search);
let urlId = urlData.get("id");

let selectedProduct;

//récupération des données dans l'api
const fetchApi = () => {
  return fetch(api)
    .then((response) => response.json())
    .catch((err) => console.log("erreur : " + err));
};

//Insertion des données dans le dom, product.html et dans le panier
const displayProduct = () => {
  let res = fetchApi().then((results) => {
    let data = results;
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
