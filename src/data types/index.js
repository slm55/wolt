const storeData = [
  {
    id: 1,
    name: "Salam Bro",
    imageUrl:
      "https://images.deliveryhero.io/image/stores-glovo/stores/565d9076196a96580be3ed764aa85ea3b5937e5276357bbc9dd030a41f8c285b?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
    rating: 94,
    reviews: 500,
    discount: -20,
    isDeliveryFree: false
  },
  {
    id: 2,
    name: "Bahandi",
    imageUrl:
      "https://images.deliveryhero.io/image/stores-glovo/stores/1b83179e9b3d0e87b2bcd473e8b42f617f8607ef5f12e2a7a044d506e70aa076?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
    rating: 94,
    reviews: 450,
    isDeliveryFree: false
  },
  {
    id: 3,
    name: "I'm feel-good restaurants",
    imageUrl:
      "https://images.deliveryhero.io/image/stores-glovo/stores/13f9c3a9d078f55ec50eef46067dfc8c2fdc75a6b9ee3cf9cc385d8ee21a32ca?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
    rating: 94,
    reviews: 500,
    isDeliveryFree: true
  },
  {
    id: 4,
    name: "KFC",
    imageUrl:
      "https://images.deliveryhero.io/image/stores-glovo/stores/d4648d512c4a987f61349dc7f086328f332ef6a719b63bde68f83512ad923aef?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
    rating: 90,
    reviews: 500,
  },
  {
    id: 5,
    name: "Salam Bro",
    imageUrl:
      "https://images.deliveryhero.io/image/stores-glovo/stores/267157c8141ecebc7316ae9b146c2e4c01d055bd7202fcc058630beda6972da5?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
    rating: 94,
    reviews: 500,
  },
  {
    id: 6,
    name: "Gippo",
    imageUrl:
      "https://images.deliveryhero.io/image/stores-glovo/stores/ab06a44ae442c05ff2ed59e2b1b9bbe492c5499a826e8787a8535971eadac6b2?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
    rating: 92,
    reviews: 500,
    discount: -20
  },
  {
    id: 7,
    name: "Zheka's Doner",
    imageUrl:
      "https://images.deliveryhero.io/image/stores-glovo/stores/47eb6734c18126b6fa411a63c2701bb165d9dca4b08dfd5a13b9891a8baa766c?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
    rating: 88,
    reviews: 500,
  },
  {
    id: 8,
    name: "Burger King",
    imageUrl:
      "https://images.deliveryhero.io/image/stores-glovo/stores/50b0efb192619699c322276512203f519d994877da764c1053f691a8ffd407a3?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
    rating: 93,
    reviews: 500,
    discount: -20
  }
];
function createCard(restaurant) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("section-two_card");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("section-two_card_img");
  imgDiv.style.backgroundImage = `url(${restaurant.imageUrl})`;
  // img.src = restaurant.imageUrl

  if(restaurant.hasOwnProperty('discount')) {

  }

  if(restaurant.isDeliveryFree) {
    // free 
  }

  const textsDiv = document.createElement("div");
  textsDiv.classList.add("section-two_card_texts");

  const titleHeader = document.createElement("h1");
  titleHeader.textContent = restaurant.name;

  const ratingParagraph = document.createElement("p");
  const strongElement = document.createElement("strong");
  strongElement.textContent = restaurant.rating;
  const spanElement = document.createElement("span");
  spanElement.textContent = `(${restaurant.reviews})`;
  spanElement.style.color = "gray";

  ratingParagraph.appendChild(strongElement);
  ratingParagraph.appendChild(spanElement);

  textsDiv.appendChild(titleHeader);
  textsDiv.appendChild(ratingParagraph);

  cardDiv.appendChild(imgDiv);
  cardDiv.appendChild(textsDiv);

  cardDiv.addEventListener('click', () => {
    window.location.href = `restaurantDetails.html?id=${restaurant.id}`;
  })

  return cardDiv;
}

const container = document.querySelector(".section-two_cards"); // container

for (const rest of storeData) {
  const card = createCard(rest);
  container.appendChild(card);
}

const data = [
  {
    oldPrice: 119900,
    price: 49900,
    brand: "Vivaldi",
    category: "Пальто",
  },
  {
    price: 160850,
    brand: "Winterra",
    category: "Куртка утепленная",
  },
  {
    price: 54000,
    brand: "Tom Tailor",
    category: "Джинсы",
  },
  {
    oldPrice: 32490,
    price: 14250,
    brand: "Finn Flare",
    category: "Олимпийка",
  },
  {
    oldPrice: 282200,
    price: 141070,
    brand: "Marc O'Polo",
    category: "Пуховик",
  },
  {
    price: 62900,
    brand: "adidas",
    category: "Костюм спортивный",
  },
  {
    oldPrice: 14950,
    price: 8950,
    brand: "Colin's",
    category: "Брюки",
  },
  {
    oldPrice: 113990,
    price: 34875,
    brand: "Finn Flare",
    category: "Пуховик",
  },
];

const cards = document.querySelectorAll(".section-cards");

for (const card of cards) {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.1)";
    card.style.borderBottom = "1px solid black";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.borderBottom = "none";
  });
}

const restCards = document.querySelectorAll(".section-two_card");

for (const card of restCards) {
  card.addEventListener("mouseenter", () => {
    card.firstChild.style.transform = "scale(1.1)";
  });

  card.addEventListener("mouseleave", () => {
    card.firstChild.style.transform = "scale(1)";
  });
}

// container.firstElementChild.style.borderBottom = "1px solid black";
// container.lastElementChild.style.borderBottom = "1px solid black";
// container.children[1].style.borderBottom = "1px solid black";

for (const card of container.children) {
  card.style.borderBottom = "1px solid black";
}

container.removeChild(container.firstElementChild)
container.removeChild(container.lastElementChild)