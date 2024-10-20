class CartModel {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
  }

  addItem(product) {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1; // Increment quantity
    } else {
      product.quantity = 1; // Set initial quantity
      this.cart.push(product); // Add new product to cart
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
}

export default new CartModel();
