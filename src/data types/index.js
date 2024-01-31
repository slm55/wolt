const streetEl = document.querySelector("#street-name");

// streetEl.classList.add("street_name");
// streetEl.classList.add("streetname");
// streetEl.classList.add("streeeeet");
// streetEl.classList.remove("street_name");

streetEl.style.color = "#00A082FF";
streetEl.style.backgroundColor = "white"; 

// setTimeout(() => {
//     streetEl.textContent = "Tole bi Street";
// }, 5000);

// setInterval(() => {
//     streetEl.textContent = "Tole bi Street"
// }, 3000);

// setInterval(() => {
//     streetEl.textContent = "Maulenov Street"
// }, 6000);

// innerHTML -> string
const menu = document.querySelector(".menu");
// menu.innerHTML = `
//       <h3>Menu</h3>
//       <ul>
//         <li>Burger</li>
//         <li>Burger</li>
//         <li>Burger</li>
//         <li>Burger</li>
//         <li>Burger</li>
//       </ul>
// `

// createElement -> object
const menuHeading = document.createElement("h3");
menuHeading.textContent = "Menu";
menu.appendChild(menuHeading);

const menuList = document.createElement("ul");
const foods = ["Chicken", "Burger", "Sushi"]

for (let i = 0; i < foods.length; i++) {
    const li = document.createElement("li");
    li.textContent = foods[i];
    menuList.appendChild(li);
}

menu.appendChild(menuList);

const lastSection = document.createElement("section");
lastSection.classList.add("last-section");

// const body = document.querySelector("body");
document.body.appendChild(lastSection);


const cafeList = [
    {
        name: "Salam Bro", 
        img: "https//:",
        rating: 93,
        category: "Burgers",
        reviews: 500,
        isFreeDelivery: true
    }, 
    {

    }
]
// const cafeContainer = docu querySel
for (let cafe of cafeList) {
    const cafe = createCafeCard(cafe);
    cafeContainer.appendChild(cafe)
}

function createCafeCard(cafe) {
    const card =  document.createElement("div")
    
    return card;
}














