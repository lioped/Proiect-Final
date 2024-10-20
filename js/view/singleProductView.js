class SingleProductView {
  constructor() {}

  setEventListeners() {
    const backHome = document.querySelector(".back-home");
    const backShop = document.querySelector(".back-shop");

    backHome.addEventListener("click", () => {
      this.showHome();
    });

    backShop.addEventListener("click", () => {
      this.showShop();
    });
  }

  showHome() {
    const singleProductSection = document.querySelector(".single-product__page");
    singleProductSection.style.display = "none";
    const homePage = document.querySelector(".home-page");
    homePage.style.display = "flex";
  }

  showShop() {
    const singleProductSection = document.querySelector(".single-product__page");
    singleProductSection.style.display = "none";
    const shopPage = document.querySelector(".shop-page");
    shopPage.style.display = "flex";
  }
}

export default new SingleProductView();
