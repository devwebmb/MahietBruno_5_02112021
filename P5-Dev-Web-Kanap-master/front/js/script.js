// http://localhost:3000/api/products
let api = "http://localhost:3000/api/products";

//Récupération des données
// fetch(api)
//   .then(function (res) {
//     console.log(res); //test1 plan d'acceptation
//     return res.json();
//   })
//   .catch((err) => console.log("erreur :" + err))
//   .then(function (data) {
//     console.log(data);
//     for (let element of data) {
//       //Ajout des différents articles de façon dynamique
//       document.querySelector(
//         "#items"
//       ).innerHTML += ` <a href="./product.html?id=${element._id}">
//       <article>
//         <img src="${element.imageUrl}" alt="${element.altTxt}">
//         <h3 class="productName">${element.name}</h3>
//         <p class="productDescription">${element.description}</p>
//       </article>
//     </a>`;
//     }
//   });

// const fetchApi = () => {
//   return new Promise((resolve, reject) => {
//     fetch(api)
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };

// //const uneFonction = () => {
//   // ... plein de choses mais pas trop
//   return quelqueChose
// }

// const uneAutreFonction = (data) => {
//   // ... plein de choses qui utilisent la data
// }

// const data = uneFunction()
// uneAutreFonction(data)
const fetchApi = () => {
  fetch(api)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      let array = data;
      console.log(array);
      return array;
    });
};
