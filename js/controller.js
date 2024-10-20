import navigationView from "./view/navigationView";
import productModel from "./model/productModel";
import homePageView from "./view/homePageView";
import cartModel from "./model/cartModel";
import cartView from "./view/cartView";

// Load products for the home page
const loadProductsForHome = async (limit = 8) => {
  const products = await productModel.fetchJewelry(); // Fetch products from the API
  const displayProducts = [];
  while (displayProducts.length < limit) {
    displayProducts.push(...products);
  }
  const limitedProducts = displayProducts.slice(0, limit);
  limitedProducts.forEach((product) => homePageView.renderProduct(product, ".container-cards")); // Render each fetched product
};

// Load products for the shop page
const loadProductsForShop = async (limit = 16) => {
  const products = await productModel.fetchJewelry(); // Fetch products from the API
  const displayProducts = [];
  while (displayProducts.length < limit) {
    displayProducts.push(...products);
  }
  const limitedProducts = displayProducts.slice(0, limit);
  limitedProducts.forEach((product) => homePageView.renderProduct(product, ".shop-cards")); // Render each fetched product
};

// Initialize the controller
const initController = () => {
  navigationView.setEventListeners(); // Set navigation event listeners
  loadProductsForHome(); // Load products for the home page
  loadProductsForShop(); // Load products for the shop page
  loadCartItems(); // Load cart items on initialization
};

// Load cart items from local storage
const loadCartItems = () => {
  const cartItems = cartModel.getItems(); // Get items from cart model
  cartView.renderCartItems(cartItems); // Render cart items
};

// Start the application
initController();
