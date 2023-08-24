function StoreAdd(id) {
    switch (id) {
        case 1:
            totalPrice += 69.99
            displayPrice.textContent = `${totalPrice.toFixed(2)} €`;
            item1number +=1
            item1[0].textContent = `${item1number} X Ultimate Gaming Chair`
            break
        case 2:
            totalPrice += 189.99
            displayPrice.textContent = `${totalPrice.toFixed(2)} €`;
            item2number +=1
            item2[0].textContent = `${item2number} X Gamer Desk`
            break
        case 3:
            totalPrice += 234.99
            displayPrice.textContent = `${totalPrice.toFixed(2)} €`;
            item3number +=1
            item3[0].textContent = `${item3number} X Prime Gamer Desk`
            break
        case 4:
            totalPrice += 549.99
            displayPrice.textContent = `${totalPrice.toFixed(2)} €`;
            item4number +=1
            item4[0].textContent = `${item4number} X Gamer Bed`
            break
        case 5:
            totalPrice += 21.99
            displayPrice.textContent = `${totalPrice.toFixed(2)} €`;
            item5number +=1
            item5[0].textContent = `${item5number} X Gamer Lamp`
            break
    }
}

// TODO Add a total price that's dynamically updated
let totalPrice = 0;
let displayPrice = document.getElementById("price");
displayPrice.textContent = `${totalPrice} €`;
// TODO Add number of each item that's dynamically updated and injected
let item1number = 0;
let item2number = 0;
let item3number = 0;
let item4number = 0;
let item5number = 0;

let item1 = document.getElementsByClassName("item1")
let item2 = document.getElementsByClassName("item2")
let item3 = document.getElementsByClassName("item3")
let item4 = document.getElementsByClassName("item4")
let item5 = document.getElementsByClassName("item5")


