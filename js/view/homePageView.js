import cartModel from "../model/cartModel"; // Import cart model
import cartView from "../view/cartView"; // Import cart view

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

    // Hover functionality
    const hover = card.querySelector(".hover");
    let timer;

    card.addEventListener("mouseenter", () => {
      timer = setTimeout(() => {
        hover.classList.add("hoverd");
      }, 1000);
    });

    card.addEventListener("mouseleave", () => {
      clearTimeout(timer);
      hover.classList.remove("hoverd");
    });

    // Add to cart event
    card.querySelector(".add-to__cart").addEventListener("click", () => {
      cartModel.addItem(product); // Add product to cart model
      console.log(`${product.title} added to cart!`); // Log for confirmation
      cartView.renderCartItems(cartModel.getItems()); // Render cart items after adding
    });
  }
}

export default new HomePageView();
