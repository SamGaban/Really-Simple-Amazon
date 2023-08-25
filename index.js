let items = [
    {id: 1, name:'Gaming chair', price:69.99, source:"assets/images/chair.png", cart:0},
    {id: 2, name:'Gamer Desk', price:89.99, source:"assets/images/desk.png", cart:0},
    {id: 3, name:'Prime Gamer Desk', price:134.99, source:"assets/images/gaming-desk.png", cart:0},
    {id: 4, name:'Gamer Bed', price:249.99, source:"assets/images/bed.png", cart:0},
    {id: 5, name:'Gamer Lamp', price:19.99, source:"assets/images/lamp.png", cart:0}
];



function StoreAdd(num) {
    total += items[num].price;
    priceHtml.textContent = `${total.toFixed(2)} €`;
    // ITEM SPECIFIC SUB TOTAL
    if (items[num].cart == 0) {
        items[num].cart += 1;
        // HR Separator
        
        // Container that's gonna be appended to the main container
        let mainContainer = document.getElementById("appendable");
        let division = document.createElement("div");
        division.setAttribute("class", `div-item${items[num].id}`);
        // Name of the item
        let subTotalItem = document.createElement("h5");
        subTotalItem.textContent = items[num].name;
        subTotalItem.setAttribute("class", `title-item${items[num].id}`);
        division.appendChild(subTotalItem);
        // Number of orders of the item and total price item generated
        let subTotalItemDesc = document.createElement("p");
        subTotalItemDesc.setAttribute("class", `subtotal-item${items[num].id}`)
        subTotalItemDesc.textContent = `${items[num].cart} X : ${(items[num].cart * items[num].price).toFixed(2)} €`;
        division.appendChild(subTotalItemDesc);
        // Delete Button

        // Final Append
        mainContainer.appendChild(division);
    } else {
        items[num].cart += 1;
        // Name of the item
        let divToMod = document.getElementsByClassName(`div-item${items[num].id}`);
        let itemToMod = document.getElementsByClassName(`subtotal-item${items[num].id}`);
        itemToMod[0].textContent = `${items[num].cart} X : ${(items[num].cart * items[num].price).toFixed(2)} €`;
        divToMod[0].appendChild(itemToMod);
    }
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