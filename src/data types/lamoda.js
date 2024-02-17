const lamoda = [
    {
        id: 1,
        name: "Новинки одежды",
        imageUrl: "https://a.lmcdn.ru/bs2/0/81/566x448_new_clothes.jpg",
        rating: "Зимние колекций"

    },
    {
        id: 2,
        name: "Скидки до 80%",
        imageUrl: "https://a.lmcdn.ru/bs2/9/82/m_ba.jpg",
        rating: "На тысячей моделей"

    },
    {
        id: 3,
        name: "Premium",
        imageUrl: "https://a.lmcdn.ru/bs2/5/41/566x448_clothes_premium.jpg",
        rating: "Купите то что хотели давно"

    },
    {
        id: 4,
        name: "Спорт",
        imageUrl: "https://a.lmcdn.ru/bs2/9/20/566x448_clothes_sport.jpg",
        rating: "Все на тренеровок"

    }
]



function createLamodaCard(rest) {
    // Create main div element with class "lamoda-card"
    var lamodaCard = document.createElement("div");
    lamodaCard.className = "lamoda-card";

    // Create div element with class "lamoda-img"
    var lamodaImg = document.createElement("div");
    lamodaImg.className = "lamoda-img";

    // Create img element with src, width, and height attributes
    var img = document.createElement("img");
    img.src = rest.imageUrl;
    img.style.height = "250px";

    // Append img to lamodaImg
    lamodaImg.appendChild(img);

    // Create div element with class "lamoda-text"
    var lamodaText = document.createElement("div");
    lamodaText.className = "lamoda-text";

    // Create h3 element for heading
    var heading = document.createElement("h3");
    heading.textContent = rest.name;

    // Create p element for paragraph
    var paragraph = document.createElement("p");
    paragraph.textContent = `${rest.rating}`;

    // Append heading and paragraph to lamodaText
    lamodaText.appendChild(heading);
    lamodaText.appendChild(paragraph);

    // Append lamodaImg and lamodaText to lamodaCard
    lamodaCard.appendChild(lamodaImg);
    lamodaCard.appendChild(lamodaText);

    // Return the constructed card
    return lamodaCard;
}



const container = document.querySelector(".lamoda_banner");

for (const rest of lamoda) {
    const card = createLamodaCard(rest);
    container.appendChild(card);
}




const moda = [
    {
        id: 1,
        name: "108 800 ₸",
        imageUrl: "https://a.lmcdn.ru/img236x341/E/A/EA002EMHKYN5_10152278_1_v2_2x.jpg",
        text_p: "EA7",
        text_s: "Костюм спортивный"
    },
    {
        id: 2,
        name: "49.900 ₸",
        imageUrl: "https://a.lmcdn.ru/img236x341/M/P/MP002XM0V7IF_20626479_1_v1_2x.jpg",
        text_p: "Vivaldi",
        text_s: " Пальто"
    },
    {
        id: 3,
        name: "22.400 ₸",
        imageUrl: "https://a.lmcdn.ru/img236x341/M/P/MP002XM0VJZJ_22092919_1_v1_2x.jpeg",
        text_p: "Sela",
        text_s: "Рубашка джинсовая"
    },
    {
        id: 4,
        name: "141.070 ₸",
        imageUrl: "https://a.lmcdn.ru/img236x341/M/P/MP002XM256FI_21521300_1_v1_2x.jpg",
        text_p: "Marc O'Polo",
        text_s: "Пуховик"
    },
    {
        id: 5,
        name: "16.690 ₸",
        imageUrl: "https://a.lmcdn.ru/img236x341/R/T/RTLACC480301_18395368_1_v1_2x.jpg",
        text_p: "UNIQLO",
        text_s: "Толстовка ультраэластичная DRY"
    },
    {
        id: 6,
        name: "55.70 ₸",
        imageUrl: "https://a.lmcdn.ru/img236x341/R/T/RTLADD722701_21823405_1_v1_2x.jpg",
        text_p: "Moaxsport",
        text_s: "Пуховик Igora light"
    },
    {
        id: 7,
        name: "24.990 ₸",
        imageUrl: "https://a.lmcdn.ru/img236x341/R/T/RTLADF619901_22105062_1_v1.jpg",
        text_p: "Mango Man",
        text_s: "Поло WINNY"
    },

    {
        id: 8,
        name: "90.300 ₸",
        imageUrl: "https://a.lmcdn.ru/img236x341/R/T/RTLACG284804_21808875_1_v1_2x.jpg",
        text_p: "Diesel",
        text_s: " Куртка джинсовая"
    }

]

const data = [
    {
        id: 1,
        oldPrice: 119900,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0MVIH_12351054_1_v1_2x.jpg',
      price: 49900,
      brand: "Vivaldi",
      category: "Пальто"
    },
    {
        id: 2,
      price: 160850,
      img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM256FI_21521300_1_v1_2x.jpg',
      brand: "Winterra",
      category: "Куртка утепленная"
    },
    {
        id: 3,
      price: 54000,
      img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM256FI_21521300_1_v1_2x.jpg',
      brand: "Tom Tailor",
      category: "Джинсы"
    },
    {
        id: 4,
        oldPrice: 32490, 
      price: 14250,
      img: 'https://a.lmcdn.ru/img600x866/R/T/RTLACX556101_21521814_1_v1_2x.jpg',
      brand: "Finn Flare",
      category: "Олимпийка"
    },
    {
        id: 5,
        oldPrice: 282200,
      price: 141070,
      img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0V7IF_20626479_1_v1_2x.jpg',
      brand: "Marc O'Polo",
      category: "Пуховик"
    },
    {
        id: 6,
      price: 62900,
      img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW171K8_20402833_1_v1.jpeg',
      brand: "adidas",
      category: "Костюм спортивный"
    },
    {
        id: 7,
        oldPrice: 14950,
      price: 8950,
      img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0SB6D_21287631_1_v1.jpeg',
      brand: "Colin's",
      category: "Брюки"
    },
    {
        id: 8,
        oldPrice: 113990,
      price: 34875,
      img: 'https://a.lmcdn.ru/img600x866/R/T/RTLADD722701_21823405_1_v1_2x.jpg',
      brand: "Finn Flare",
      category: "Пуховик"
    }
  ];

function createCard(i) {
    // Create div with class "card"
    var cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    // Create image element with src, alt, and height attributes
    let img = document.createElement('img');
    img.src = i.img;
    img.style.height = '300px';
    cardDiv.appendChild(img);
    // Create div with class "card-text"
    var textDiv = document.createElement('div');
    textDiv.className = 'card-text';

    // Create heading element (h3) with text content
    let priceDiv = document.createElement('div');
    priceDiv.className = 'price-container';

    if (i.hasOwnProperty('oldPrice')) {
        let oldPrice = document.createElement('p');
        oldPrice.textContent = i.oldPrice;
        oldPrice.style.textDecoration = "line-through";

        let heading = document.createElement('h3');
        heading.textContent = `${i.price} ₸`;
        heading.style.color = "red";

        priceDiv.appendChild(oldPrice);
        priceDiv.appendChild(heading);
    } else {
        let heading = document.createElement('h3');
        heading.textContent = `${i.price} ₸`;

        priceDiv.appendChild(heading);
    }

    textDiv.appendChild(priceDiv);

    // Create paragraph elements (p) with text content
    var paragraph1 = document.createElement('p');
    paragraph1.textContent = i.brand;

    var paragraph2 = document.createElement('p');
    paragraph2.textContent = i.category;

    // Append heading and paragraphs to textDiv
    textDiv.appendChild(paragraph1);
    textDiv.appendChild(paragraph2);

    // Append image and textDiv to cardDiv

    cardDiv.appendChild(textDiv);
    cardDiv.addEventListener("click", () => {
        window.location.href = `profil.html?id=${i.id}`
    })

    return cardDiv; 
}

let con = document.querySelector(".card-card")
for (let i of data) {
    let card = createCard(i)
    con.appendChild(card)
}















