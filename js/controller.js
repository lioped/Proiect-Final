const fetchCategory = async function () {
  const response = await fetch("https://fakestoreapi.com/products/category/electronics");
  const data = await response.json();

  console.log(data);
};
fetchCategory();
