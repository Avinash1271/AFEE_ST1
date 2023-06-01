interface Product {
    title: string;
    image: string;
    price: number;
    description: string;
  }
  
  const products: Product[] = [
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
  
  function displayProducts(): void {
    const productsContainer = document.getElementById("products-container");
    productsContainer!.innerHTML = "";
  
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
  
      const image = document.createElement("img");
      image.src = product.image;
      productDiv.appendChild(image);
  
      const title = document.createElement("h3");
      title.textContent = product.title;
      productDiv.appendChild(title);
  
      const price = document.createElement("p");
      price.textContent = `Price: ${product.price}`;
      productDiv.appendChild(price);
  
      const description = document.createElement("p");
      description.textContent = product.description;
      productDiv.appendChild(description);
  
      productsContainer!.appendChild(productDiv);
    });
  }
  
  function createDropdownOptions(): void {
    const dropdown = document.getElementById("products-dropdown");
  
    products.forEach((product, index) => {
      const option = document.createElement("option");
      option.value = index.toString();
      option.text = product.title;
      dropdown?.appendChild(option);
    });
  }
  
  function displaySelectedProduct(selectedIndex: number): void {
    const selectedProduct = products[selectedIndex];
  
    const productDetailsContainer = document.getElementById("product-details");
    productDetailsContainer!.innerHTML = "";
  
    const image = document.createElement("img");
    image.src = selectedProduct.image;
    productDetailsContainer!.appendChild(image);
  
    const title = document.createElement("h3");
    title.textContent = selectedProduct.title;
    productDetailsContainer!.appendChild(title);
  
    const price = document.createElement("p");
    price.textContent = `Price: ${selectedProduct.price}`;
    productDetailsContainer!.appendChild(price);
  
    const description = document.createElement("p");
    description.textContent = selectedProduct.description;
    productDetailsContainer!.appendChild(description);
  }
  
  function handleDropdownChange(): void {
    const dropdown = document.getElementById("products-dropdown") as HTMLSelectElement;
    const selectedIndex = parseInt(dropdown.value);
    displaySelectedProduct(selectedIndex);
  }
  
  // Create the product list and dropdown options on page load
  window.onload = function () {
    displayProducts();
    createDropdownOptions();
  };
  
  // Add event listener to the dropdown
  const dropdown = document.getElementById("products-dropdown") as HTMLSelectElement;
  dropdown.addEventListener("change", handleDropdownChange);
  