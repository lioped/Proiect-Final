import cartModel from "../model/cartModel";

class CartView {
  constructor() {
    this.cartItemsContainer = document.querySelector(".cart-list"); // Container for cart items
    this.subtotalElement = document.querySelector(".subtotal-price__cart"); // Element to display subtotal
  }

  renderCartItems(cartItems) {
    this.cartItemsContainer.innerHTML = ""; // Clear existing items

    cartItems.forEach((item) => {
      const productCart = document.createElement("div");
      productCart.classList.add("product-added");
      productCart.innerHTML = `
        <div class="item-added-photo">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="details-add-to">
          <h6>${item.title}</h6>
          <div class="price-total-per-product">
            <span class="quantity-added">${item.quantity}</span>
            <span class="ori"> X </span>
            <span class="total-price-one-p">$${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        </div>
        <div class="delete-product" data-id="${item.id}">
          <span class="material-symbols-outlined">delete</span>
        </div>
      `;
      this.cartItemsContainer.appendChild(productCart);
    });

    this.updateTotal(cartItems); // Update total price after rendering items

    // Attach event listeners for delete buttons
    this.attachDeleteListeners();
  }

  attachDeleteListeners() {
    const deleteButtons = this.cartItemsContainer.querySelectorAll(".delete-product");

    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const productId = parseInt(event.target.closest(".delete-product").dataset.id);
        cartModel.removeItem(productId); // Remove item from cart model
        this.renderCartItems(cartModel.getItems()); // Re-render cart items
      });
    });
  }

  updateTotal(cartItems) {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    this.subtotalElement.textContent = `$${total.toFixed(2)}`; // Update total price display
  }
}

export default new CartView();
