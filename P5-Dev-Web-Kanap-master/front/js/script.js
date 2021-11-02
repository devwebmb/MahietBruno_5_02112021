// http://localhost:3000/api/products
let url = "http://localhost:3000/api/products";

fetch(url)
  .then(function (res) {
    // console.log(res); //test1 plan d'acceptation
    return res.json();
  })
  .catch((err) => console.log("erreur :" + err))
  .then(function (data) {
    for (let element of data) {
      // console.log(data);
      document.querySelector("#items").innerHTML += ` <a href="">
      <article>
        <img src="${element.imageUrl}" alt="${element.altTxt}">
        <h3 class="productName">${element.name}</h3>
        <p class="productDescription">${element.description}</p>
      </article>
    </a>`;
    }
  });
