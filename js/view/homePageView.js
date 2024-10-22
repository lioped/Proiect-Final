import cartModel from "../model/cartModel"; // Import cart model
import cartView from "../view/cartView"; // Import cart view
import productModel from "../model/productModel";
import singleProduct from "./singleProduct";

class HomePageView {
  constructor() {}

  renderProduct(product, containerSelector) {
    const cardsContainer = document.querySelector(containerSelector); // Select your container

    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = product.id;
    card.innerHTML = `
      <div class="item">
        <div class="product-img">
          <img src="${product.image}" alt="${product.description}" />
        </div>
        <div class="box-card__info">
          <h4>${product.title}</h4>
          <span class="description-card">${product.description}</span>
          <span class="price">$${product.price}</span>
        </div>
      </div>
      <div class="hover">
        <div class="product-actions">
          <button class="add-to__cart">Add to cart</button>
          <div class="icons-actions">
            <div class="share action">
              <span>Share</span>
              <span class="material-symbols-outlined"> share </span>
            </div>
            <div class="compare action">
              <span>Compare</span>
              <span class="material-symbols-outlined"> compare_arrows </span>
            </div>
            <div class="like action">
              <span>Like</span>
              <span class="material-symbols-outlined"> thumb_up </span>
            </div>
          </div>
        </div>
      </div>
    `;

    cardsContainer.appendChild(card);
    this.setupHoverEffect(card);
  }

  setupHoverEffect(card) {
    const hoverContainer = card.querySelector(".hover"); // Target the hover container
    const itemContent = card.querySelector(".item");
    const addToCartButton = card.querySelector(".add-to__cart");

    let timer;

    // Show hover effect on mouse enter
    card.addEventListener("mouseenter", () => {
      timer = setTimeout(() => {
        hoverContainer.classList.add("hoverd"); // Add the class to show the hover effect
      }, 1000); // Adjust the delay as needed
    });

    // Hide hover effect on mouse leave
    card.addEventListener("mouseleave", () => {
      clearTimeout(timer);
      hoverContainer.classList.remove("hoverd"); // Remove the hover effect class
    });

    // Handle click on the item to navigate to the single product page
    itemContent.addEventListener("click", () => {
      const productId = card.dataset.id; // Get the product ID from the card
      const product = productModel.products.find((item) => item.id === Number(productId));
      if (product) {
        singleProduct.fetchAndDisplayProduct(productId); // Show the single product
      }
    });

    // Handle click on the add to cart button
    addToCartButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent the item click event from firing
      const productId = card.dataset.id; // Get the product ID from the card
      const product = productModel.products.find((item) => item.id === Number(productId));
      if (product) {
        cartModel.addItem({ ...product, quantity: 1 }); // Set the quantity to 1 for the new item
        console.log(`${product.title} added to cart!`); // Log for confirmation
        cartView.renderCartItems(cartModel.getItems()); // Render cart items after adding
      }
    });
  }
}

export default new HomePageView();
