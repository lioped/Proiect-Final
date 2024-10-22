import cartModel from "../model/cartModel"; // Import your cart model
import productModel from "../model/productModel";
import cartView from "./cartView"; // Import your cart view

class SingleProduct {
  constructor() {
    this.selectedQuantity = 1; // Initialize selected quantity
  }

  async fetchAndDisplayProduct(productId) {
    const product = productModel.products.find((item) => item.id === Number(productId));

    if (product) {
      this.renderProduct(product); // Render the product details
    } else {
      console.error("Product not found");
    }
  }

  renderProduct(product) {
    const singleProductSection = document.querySelector(".single-product__page");
    const otherSections = document.querySelectorAll(".home-page, .shop-page, .checkout-section");

    // Hide other sections
    otherSections.forEach((section) => (section.style.display = "none"));
    singleProductSection.style.display = "flex"; // Show the single product section

    singleProductSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Custom descriptions for products
    const customDescriptions = {
      5: "This stylish chair, made of durable plastic, combines modern design with comfort.",
      6: "This elegant sofa features tufted fabric with plush cushions, designed for maximum comfort.",
      7: "This spacious living room set offers comfort and style, with a contemporary design.",
      8: "This chic dining table set is perfect for family meals and entertaining friends.",
    };

    // Update breadcrumb with the product name
    const productNameElement = document.querySelector(".product__name");
    productNameElement.textContent = product.title; // Set the product name in the breadcrumb

    // Populate the section with product details
    singleProductSection.querySelector(".product_img").src = product.image;
    singleProductSection.querySelector(".title-product").textContent = product.title;
    singleProductSection.querySelector(".description").textContent = customDescriptions[product.id] || product.description;
    singleProductSection.querySelector(".price-product").textContent = `${product.price}$`;

    // Reset selected quantity
    this.selectedQuantity = 1; // Reset to 1 when rendering a new product
    this.updateQuantityDisplay();

    // Remove any existing event listeners to avoid duplicates
    this.removeEventListeners();

    // Attach event listeners for increase and decrease buttons
    const increaseButton = singleProductSection.querySelector(".increase");
    const decreaseButton = singleProductSection.querySelector(".decrease");

    increaseButton.addEventListener("click", () => {
      this.increaseQuantity();
    });

    decreaseButton.addEventListener("click", () => {
      this.decreaseQuantity();
    });

    const addToCartButton = singleProductSection.querySelector(".add_to_cart");
    addToCartButton.addEventListener("click", () => {
      this.addToCart(product); // Add the product to the cart
    });
  }

  removeEventListeners() {
    const singleProductSection = document.querySelector(".single-product__page");
    const increaseButton = singleProductSection.querySelector(".increase");
    const decreaseButton = singleProductSection.querySelector(".decrease");
    const addToCartButton = singleProductSection.querySelector(".add_to_cart");

    // Remove existing event listeners to prevent duplication
    const newIncreaseButton = increaseButton.cloneNode(true);
    const newDecreaseButton = decreaseButton.cloneNode(true);
    const newAddToCartButton = addToCartButton.cloneNode(true);
    increaseButton.parentNode.replaceChild(newIncreaseButton, increaseButton);
    decreaseButton.parentNode.replaceChild(newDecreaseButton, decreaseButton);
    addToCartButton.parentNode.replaceChild(newAddToCartButton, addToCartButton);
  }

  increaseQuantity() {
    this.selectedQuantity += 1;
    this.updateQuantityDisplay();
  }

  decreaseQuantity() {
    if (this.selectedQuantity > 1) {
      this.selectedQuantity -= 1;
      this.updateQuantityDisplay();
    }
  }

  updateQuantityDisplay() {
    const quantityDisplay = document.querySelector(".quantityDisplay");
    quantityDisplay.textContent = this.selectedQuantity;
  }

  addToCart(product) {
    // Create a new product object with the selected quantity
    const productToAdd = { ...product, quantity: this.selectedQuantity }; // Use the selected quantity
    cartModel.addItem(productToAdd); // Add the product with the selected quantity
    cartView.renderCartItems(cartModel.getItems()); // Refresh the cart view
  }
}

export default new SingleProduct();
