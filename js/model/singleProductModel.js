class SingleProductModel {
  displaySingleProduct(product) {
    const singleProductSection = document.querySelector(".single-product__page");
    singleProductSection.style.display = "block";

    const productImage = singleProductSection.querySelector(".product_img");
    const productTitle = singleProductSection.querySelector(".title-product");
    const productPrice = singleProductSection.querySelector(".price-product");
    const productDescription = singleProductSection.querySelector(".description");

    productImage.src = product.image;
    productTitle.textContent = product.title;
    productPrice.textContent = `$${product.price}`;
    productDescription.textContent = product.description;
  }

  hideOtherSections() {
    const homePage = document.querySelector(".home-page");
    const shopPage = document.querySelector(".shop-page");
    const checkoutPage = document.querySelector(".checkout-section");

    homePage.style.display = "none";
    shopPage.style.display = "none";
    checkoutPage.style.display = "none";
  }
}

export default new SingleProductModel();
