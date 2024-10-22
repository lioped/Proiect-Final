class CartModel {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
  }

  addItem(product) {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity; // Increment quantity
    } else {
      // product.quantity = 1; // Set initial quantity
      this.cart.push(product); // Add new product to cart
      // console.log(`Added new product to cart:`, product);
    }
    this.save();
  }

  removeItem(productId) {
    this.cart = this.cart.filter((item) => item.id !== productId); // Remove item from cart
    this.save();
  }

  getItems() {
    return this.cart; // Get cart items
  }

  save() {
    localStorage.setItem("cart", JSON.stringify(this.cart)); // Save cart to local storage
  }

  clearCart() {
    this.cart = [];
    localStorage.removeItem("cart");
  }
}

export default new CartModel();
