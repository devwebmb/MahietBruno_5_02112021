// http://localhost:3000/api/products
let api = "http://localhost:3000/api/products";

const fetchApi = () => {
  return fetch(api)
    .then((response) => response.json())
    .catch((err) => console.log("erreur : " + err));
};

/*const displayArticle =*/ (() => {
  fetchApi().then((results) => {
    let data = results;
    console.log(data);
    for (let element of data) {
      //Ajout des différents articles de façon dynamique
      document.querySelector(
        "#items"
      ).innerHTML += ` <a href="./product.html?id=${element._id}">
            <article>
              <img src="${element.imageUrl}" alt="${element.altTxt}">
              <h3 class="productName">${element.name}</h3>
              <p class="productDescription">${element.description}</p>
            </article>
          </a>`;
    }
  });
})();
