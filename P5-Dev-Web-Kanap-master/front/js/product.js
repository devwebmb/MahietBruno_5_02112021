// http://localhost:3000/api/products
let api = "http://localhost:3000/api/products";
let urlData = new URLSearchParams(window.location.search);
let urlId = urlData.get("id");

//Récupération des données, de l'url, ajout dans le code html de la page product de façon dynamique
fetch(api).then((res) =>
  res.json().then(function (data) {
    for (let element of data) {
      console.log(data);
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
          console.log(colors[i]);
          document.querySelector(
            "#colors"
          ).innerHTML += `<option value=${colors[i]}>${colors[i]}</option>`;
        }
      }
    }
  })
);
