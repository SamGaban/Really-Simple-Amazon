let items = [
    {name:'Gaming chair', price:69.99, source:"assets/images/chair.png", cart:0},
    {name:'Gamer Desk', price:89.99, source:"assets/images/desk.png", cart:0},
    {name:'Prime Gamer Desk', price:134.99, source:"assets/images/gaming-desk.png", cart:0},
    {name:'Gamer Bed', price:249.99, source:"assets/images/bed.png", cart:0},
    {name:'Gamer Lamp', price:19.99, source:"assets/images/lamp.png", cart:0}
];



function StoreAdd(num) {
    total += items[num].price;
    priceHtml.textContent = `${total.toFixed(2)} €`;
}

let total = 0;




for (let i = 0; i < items.length; i++) {
    let mainBox = document.getElementById("articleflexbox");
    let itemArticle = document.createElement("article");
    itemArticle.setAttribute("class", "container")
    let itemImage = document.createElement("img");
    itemImage.src = items[i].source;
    itemImage.alt = items[i].name;
    let itemTitle = document.createElement("h3");
    itemTitle.textContent = items[i].name;
    let itemPrice = document.createElement("h5");
    itemPrice.textContent = `${items[i].price} €`;
    let itemButton = document.createElement("button");
    itemButton.setAttribute("onclick", `StoreAdd(${i})`);
    itemButton.textContent = "Add to Cart";
    itemArticle.appendChild(itemImage);
    itemArticle.appendChild(itemTitle);
    itemArticle.appendChild(itemPrice);
    itemArticle.appendChild(itemButton);
    mainBox.appendChild(itemArticle);
}

let priceHtml = document.getElementById("price");
priceHtml.textContent = `${total} €`;