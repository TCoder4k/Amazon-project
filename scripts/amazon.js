import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
let productsHtml = "";

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}
products.forEach((product) => {
  productsHtml += `
     <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-add-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-card" data-product-id ="${product.id}">
            Add to Cart
          </button>
        </div>
    `;
});
document.querySelector(".js-products-grid").innerHTML = productsHtml;

document.querySelectorAll(".js-add-to-card").forEach((button) => {
  let timeoutId = null;

  button.addEventListener("click", () => {
    const { productId } = button.dataset;
    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${productId}`,
    ).value;
    const quantity = Number(quantitySelector);
    const addedMessage = document.querySelector(`.js-add-to-cart-${productId}`);

    addToCart(productId, quantity);
    updateCartQuantity();
    function showAddMessage() {
      if (timeoutId) clearTimeout(timeoutId);
      addedMessage.classList.add("change-opacity");

      timeoutId = setTimeout(() => {
        addedMessage.classList.remove("change-opacity");
        timeoutId = null;
      }, 2000);
    }
    showAddMessage();

    console.log(addedMessage);
    console.log(quantitySelector);
    console.log(cart);
  });
});
