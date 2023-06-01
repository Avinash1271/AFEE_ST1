var products = [
    {
        title: "Product1",
        image: "https://picsum.photos/200",
        price: 380,
        description: "First product",
    },
    {
        title: "Product2",
        image: "https://picsum.photos/200",
        price: 980,
        description: "Second product",
    },
    {
        title: "Product3",
        image: "https://picsum.photos/200",
        price: 1200,
        description: "Third product",
    },
];
function displayProducts() {
    var productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";
    products.forEach(function (product) {
        var productDiv = document.createElement("div");
        productDiv.classList.add("product");
        var image = document.createElement("img");
        image.src = product.image;
        productDiv.appendChild(image);
        var title = document.createElement("h3");
        title.textContent = product.title;
        productDiv.appendChild(title);
        var price = document.createElement("p");
        price.textContent = "Price: ".concat(product.price);
        productDiv.appendChild(price);
        var description = document.createElement("p");
        description.textContent = product.description;
        productDiv.appendChild(description);
        productsContainer.appendChild(productDiv);
    });
}
function createDropdownOptions() {
    var dropdown = document.getElementById("products-dropdown");
    products.forEach(function (product, index) {
        var option = document.createElement("option");
        option.value = index.toString();
        option.text = product.title;
        dropdown === null || dropdown === void 0 ? void 0 : dropdown.appendChild(option);
    });
}
function displaySelectedProduct(selectedIndex) {
    var selectedProduct = products[selectedIndex];
    var productDetailsContainer = document.getElementById("product-details");
    productDetailsContainer.innerHTML = "";
    var image = document.createElement("img");
    image.src = selectedProduct.image;
    productDetailsContainer.appendChild(image);
    var title = document.createElement("h3");
    title.textContent = selectedProduct.title;
    productDetailsContainer.appendChild(title);
    var price = document.createElement("p");
    price.textContent = "Price: ".concat(selectedProduct.price);
    productDetailsContainer.appendChild(price);
    var description = document.createElement("p");
    description.textContent = selectedProduct.description;
    productDetailsContainer.appendChild(description);
}
function handleDropdownChange() {
    var dropdown = document.getElementById("products-dropdown");
    var selectedIndex = parseInt(dropdown.value);
    displaySelectedProduct(selectedIndex);
}
// Create the product list and dropdown options on page load
window.onload = function () {
    displayProducts();
    createDropdownOptions();
};
// Add event listener to the dropdown
var dropdown = document.getElementById("products-dropdown");
dropdown.addEventListener("change", handleDropdownChange);
