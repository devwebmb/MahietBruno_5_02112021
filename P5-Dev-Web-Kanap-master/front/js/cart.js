// http://localhost:3000/api/products
let api = "http://localhost:3000/api/products";

const fetchApi = () => {
  return fetch(api)
    .then((response) => response.json())
    .catch((err) => console.log("erreur : " + err));
};

let storageContent = JSON.parse(localStorage.getItem("product"));

// créer et insérer des éléments dans la page panier
const cartDisplay = () => {
  //déclaration des variables
  let quantityArray = [];
  let priceArray = [];
  let totalQuantity = 0;
  let totalPrice = 0;

  // insertion dans le dom de chaque article
  for (let element of storageContent) {
    document.querySelector(
      "#cart__items"
    ).innerHTML += ` <article class="cart__item" data-id="$element.id}">
    <div class="cart__item__img">
      <img src="${element.imageUrl}" alt="${element.altTxt}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__titlePrice">
        <h2>${element.kanapName}</h2>
        <p>(${element.color})</p><br>
        <p>${element.price * element.quantity},00€</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${
            element.quantity
          }">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article>`;
    quantityArray.push(parseInt(element.quantity));
    priceArray.push(parseInt(element.price * element.quantity));
  }
  // Récupération et insertion dans le dom du prix et de la quantité totale
  for (let i = 0; i < quantityArray.length; i++) {
    totalQuantity += quantityArray[i];
  }
  for (let i = 0; i < priceArray.length; i++) {
    totalPrice += priceArray[i];
  }
  document.querySelector("#totalQuantity").innerHTML = `${totalQuantity}`;
  document.querySelector("#totalPrice").innerHTML = `${totalPrice}`;
};

const toModifyQuantity = () => {
  let quantity = document.querySelectorAll(".itemQuantity");

  for (let i = 0; i < quantity.length; i++) {
    quantity[i].addEventListener("change", (e) => {
      e.preventDefault();

      let toModifyQuantity = storageContent[i].quantity;
      let newQauntityvalue = quantity[i].value;

      const res = storageContent.find(
        (el) => el.newQauntityvalue !== toModifyQuantity
      );
      res.quantity = newQauntityvalue;
      storageContent[i].quantity = res.quantity;
      console.log(res.quantity);

      localStorage.setItem("product", JSON.stringify(storageContent));

      location.reload();
    });
  }
};

cartDisplay();
toModifyQuantity();
