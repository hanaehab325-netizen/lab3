let quantity = 0;

function showQuantity() {
 document.getElementById("quantity").textContent = quantity;
}

function addToCart() {
    quantity++;
}

function increase() {
    quantity += 1;
}

function decrease() {
    if (quantity > 0) {
        quantity--;
    }
}

function resetCart() {
    quantity = 0;
}

document.getElementById("show").addEventListener("click", showQuantity);

document.getElementById("add").addEventListener("click", addToCart);

document.getElementById("increase").addEventListener("click", increase);

document.getElementById("decrease").addEventListener("click", decrease);

document.getElementById("reset").addEventListener("click", resetCart);
