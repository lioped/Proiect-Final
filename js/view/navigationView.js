class NavigatioView {
  constructor() {
    this.hamburgerMenu = document.querySelector(".hamburger-menu");
    this.closeHamburgerMenu = document.querySelector(".close-hamburger");
    this.openHamburgerMenu = document.querySelector(".hamburger-menu-open");
    this.HamburgerIcon = document.querySelector(".hamburger-meniu-icon");
    this.homeLinkMenu = document.querySelector(".hamburger-link-home");
    this.shopLinkMenu = document.querySelector(".hamburger-link-shop");
    this.homeLink = document.querySelector(".home-link");
    this.shopLink = document.querySelector(".shop-link");
    this.homeShopBreadCrumb = document.querySelector(".shop-bread-crumb");
    this.cartBtn = document.querySelector(".cart-icon-btn");
    this.cartMenu = document.querySelector(".cart-menu");
    this.closeBtn = document.querySelector(".close");
    this.homePage = document.querySelector(".home-page");
    this.shopPage = document.querySelector(".shop-page");
    this.singleProductPage = document.querySelector(".single-product__page");
    this.checkoutPage = document.querySelector(".checkout-section");
    this.checkoutBtn = document.querySelector(".checkout-btn");
    this.homeLinkCheckout = document.querySelector(".home-link-checkout");
    this.btnBuyNow = document.querySelector(".hero--buton__buy__now");
    this.showMore = document.querySelector(".our-button__show--more");
    this.CartMeniu = document.querySelector(".cart-menu");
    this.closeIcon = document.querySelector(".close");
    this.backHome = document.querySelector(".back-home");
    this.backShop = document.querySelector(".back-shop");
    this.homeLinkFooter = document.querySelector(".home-link__footer");
    this.shopeLinkFooter = document.querySelector(".shop-link__footer");
    this.setEventListeners();
  }
  createOverlay() {
    if (!document.getElementById("overlay")) {
      const overlay = document.createElement("div");
      overlay.id = "overlay";
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "#00000033";
      overlay.style.zIndex = "2";
      document.body.appendChild(overlay);
    }
  }

  removeOverlay() {
    const overlay = document.getElementById("overlay");
    if (overlay) {
      document.body.removeChild(overlay);
    }
  }
  setEventListeners() {
    this.btnBuyNow.addEventListener("click", () => {
      this.shopPage.style.display = "flex";
      this.homePage.style.display = "none";
      this.singleProductPage.style.display = "none";
      this.checkoutPage.style.display = "none";
    });

    this.cartBtn.addEventListener("click", () => {
      this.cartMenu.classList.add("open");
      this.createOverlay();
    });

    this.closeBtn.addEventListener("click", () => {
      this.cartMenu.classList.remove("open");
      this.removeOverlay();
    });

    this.checkoutBtn.addEventListener("click", () => {
      this.homePage.style.display = "none";
      this.backShop.style.display = "none";
      this.shopPage.style.display = "none";
      this.singleProductPage.style.display = "none";
      this.checkoutPage.style.display = "flex";
      this.cartMenu.classList.remove("open");
      this.removeOverlay(); // Hide overlay
    });

    this.openHamburgerMenu.addEventListener("click", () => {
      this.hamburgerMenu.classList.add("open-menu");
      this.createOverlay();
    });

    this.closeHamburgerMenu.addEventListener("click", () => {
      this.hamburgerMenu.classList.remove("open-menu");
      this.removeOverlay();
    });

    this.homeLinkMenu.addEventListener("click", () => {
      this.shopPage.style.display = "none";
      this.homePage.style.display = "flex";
      this.singleProductPage.style.display = "none";
      this.checkoutPage.style.display = "none";
      this.hamburgerMenu.classList.remove("open-menu");
      this.removeOverlay(); // Hide overlay
    });

    this.shopLinkMenu.addEventListener("click", () => {
      this.shopPage.style.display = "flex";
      this.homePage.style.display = "none";
      this.singleProductPage.style.display = "none";
      this.checkoutPage.style.display = "none";
      this.hamburgerMenu.classList.remove("open-menu");
      this.removeOverlay(); // Hide overlay
    });

    this.backHome.addEventListener("click", () => {
      this.shopPage.style.display = "none";
      this.homePage.style.display = "flex";
      this.singleProductPage.style.display = "none";
      this.checkoutPage.style.display = "none";
      this.homePage.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    this.backShop.addEventListener("click", () => {
      this.shopPage.style.display = "flex";
      this.homePage.style.display = "none";
      this.singleProductPage.style.display = "none";
      this.checkoutPage.style.display = "none";
      this.shopPage.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    this.showMore.addEventListener("click", () => {
      this.shopPage.style.display = "flex";
      this.homePage.style.display = "none";
      this.singleProductPage.style.display = "none";
      this.checkoutPage.style.display = "none";
      this.shopPage.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    this.homeShopBreadCrumb.addEventListener("click", () => {
      this.shopPage.style.display = "none";
      this.homePage.style.display = "flex";
      this.singleProductPage.style.display = "none";
      this.checkoutPage.style.display = "none";
      this.homePage.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    this.homeLinkCheckout.addEventListener("click", () => {
      this.shopPage.style.display = "none";
      this.homePage.style.display = "flex";
      this.singleProductPage.style.display = "none";
      this.checkoutPage.style.display = "none";
      homePage.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    this.homeLinkFooter.addEventListener("click", () => {
      this.shopPage.style.display = "none";
      this.homePage.style.display = "flex";
      this.singleProductPage.style.display = "none";
      this.checkoutPage.style.display = "none";
      this.homePage.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    this.shopeLinkFooter.addEventListener("click", () => {
      this.shopPage.style.display = "flex";
      this.homePage.style.display = "none";
      this.singleProductPage.style.display = "none";
      this.checkoutPage.style.display = "none";
      this.shopPage.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    this.homeLink.addEventListener("click", () => {
      this.shopPage.style.display = "none";
      this.homePage.style.display = "flex";
      this.singleProductPage.style.display = "none";
      this.checkoutPage.style.display = "none";
      this.homePage.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    this.shopLink.addEventListener("click", () => {
      this.shopPage.style.display = "flex";
      this.homePage.style.display = "none";
      this.singleProductPage.style.display = "none";
      this.checkoutPage.style.display = "none";
      this.shopPage.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}
export default new NavigatioView();
