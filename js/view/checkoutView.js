import cartModel from "../model/cartModel"; // Import your cart model
import cartView from "./cartView"; // Import your cart view

class checkoutView {
  constructor() {
    this.cartItemContainer = document.querySelector(".cart-list__check");
    this.placeOrderButton = document.querySelector(".btn-place__order");
    this.modal = document.querySelector(".order-modal");
  }

  setEventListeners() {
    this.placeOrderButton.addEventListener("click", () => {
      this.placeOrder();
    });
  }

  renderCartItems(cartItems) {
    this.cartItemContainer.innerHTML = "";
    cartItems.forEach((item) => {
      const productCartCheckout = document.createElement("div");
      productCartCheckout.classList.add("cart-display");

      productCartCheckout.innerHTML = `
        <div class="name-quantity">
                    <h4>${item.title}</h4>
                    <span>X</span>
                    <p>${item.quantity}</p>
                </div>
                <span class="price">${(item.price * item.quantity).toFixed(2)}$</span>
      `;
      this.cartItemContainer.appendChild(productCartCheckout);
    });
    this.updateTotals(cartItems);
  }

  updateTotals(cartItems) {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const displayElements = document.querySelectorAll(".subtotal-js");
    displayElements.forEach((element) => {
      element.textContent = `${subtotal.toFixed(2)}$`;
    });
  }

  placeOrder() {
    if (cartModel.getItems().length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const formInputs = document.querySelectorAll(".form-input");
    let isValid = true;

    formInputs.forEach((input) => {
      if (!input.value) {
        alert(`You need to fill the inputs!`);
        isValid = false;
      }
    });
    if (!isValid) {
      return;
    }

    cartModel.clearCart();

    this.clearCartDispaly();

    //Clear the form inputs
    formInputs.forEach((input) => (input.value = ""));

    // Update the cart view to reflect the empty cart
    cartView.renderCartItems(cartModel.getItems());

    // Show the modal
    this.showModal("Your order is good! Soon our team will take care of it.");
  }
  showModal(message) {
    const modalMessage = this.modal.querySelector(".modal-message");
    modalMessage.textContent = message;

    this.modal.style.display = "block"; // Show the modal
    this.modal.style.top = 0;
    setTimeout(() => {
      this.modal.style.display = "none";
      // Hide after a delay
    }, 3000); // Show for 3 seconds
  }
  clearCartDispaly() {
    this.cartItemContainer.innerHTML = "";
    document.querySelector(".subtotal-js").textContent = "0.00";
    document.querySelector(".total-checkout").textContent = "0.00";
  }
}

export default new checkoutView();
