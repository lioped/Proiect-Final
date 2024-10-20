import slytherine from "/imgs/slytherine.png"; // Adjust the path based on your project structure
import lolito from "/imgs/image 3.png";
import respira from "/imgs/image 4.png";
import leviosa from "/imgs/chair.png";

class ProductModel {
  constructor() {
    this.products = [];
  }

  async fetchJewelry() {
    try {
      const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
      const data = await response.json();

      const updateProducts = [
        { id: 5, image: slytherine, title: "Syltherine", description: "stylish cafe chair" },
        { id: 6, image: lolito, title: "Lolito", description: "Luxury big sofa" },
        { id: 7, image: respira, title: "Respira", description: "Outdoor bar table" },
        { id: 8, image: leviosa, title: "Leviosa", description: "stylish cafe chair" },
      ];

      // Create a new array for updated products
      const updatedProducts = data.map((product) => {
        const customData = updateProducts.find((p) => p.id === product.id);
        return {
          ...product,
          image: customData ? customData.image : product.image,
          title: customData ? customData.title : product.title,
          description: customData ? customData.description : product.description,
        };
      });

      this.products = updatedProducts; // Set the updated products
      return this.products; // Return the updated product list
    } catch (error) {
      console.log("error fetching data", error);
      return [];
    }
  }
}

export default new ProductModel();
