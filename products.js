const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

let mainFruits = document.getElementById("fruits");
let mainDrinks = document.getElementById("drinks");
let mainHygiene = document.getElementById("hygiene");

let fruitList = document.createElement("ul");
let drinkList = document.createElement("ul");
let hygieneList = document.createElement("ul");

mainFruits.appendChild(fruitList);
mainDrinks.appendChild(drinkList);
mainHygiene.appendChild(hygieneList);

for(let i = 0; i < products.length; i++){
  if(products[i].category == "Frutas"){
    
    let li = document.createElement("li");
    let img = document.createElement("img");
    let mainProduct = document.createElement("main");
    let titleProduct = document.createElement("h1");
    let categoryProduct = document.createElement("h5");
    let priceProduct = document.createElement("strong");
    
    li.classList.add("product");
    img.classList.add("product-img");
    mainProduct.classList.add("product-main");
    titleProduct.classList.add("product-title");
    categoryProduct.classList.add("product-category");
    priceProduct.classList.add("product-price");
    
    if(products[i].image == undefined){
      img.src = "./img/products/no-img.svg"
    } else {img.src = products[i].image};
    img.alt = products[i].imageDescription;
    img.title = products[i].title;
    
    titleProduct.innerText = `${products[i].title}`;
    categoryProduct.innerText = `${products[i].category}`;
    priceProduct.innerText = `${products[i].price}`;
    
    
    fruitList.appendChild(li);
    li.appendChild(img);
    li.appendChild(mainProduct);
    mainProduct.appendChild(titleProduct);
    mainProduct.appendChild(categoryProduct);
    mainProduct.appendChild(priceProduct);
  }
  if(products[i].category == "Bebidas"){
    
    let li = document.createElement("li");
    li.classList.add("product");
    drinkList.appendChild(li);

    let img = document.createElement("img");
    if(products[i].image == undefined){
      img.src = "./img/products/no-img.svg"
    } else {img.src = products[i].image};
    img.alt = products[i].imageDescription;
    img.title = products[i].title;
    img.classList.add("product-img");
    li.appendChild(img);

    let mainProduct = document.createElement("main");
    mainProduct.classList.add("product-main");
    li.appendChild(mainProduct);

    let titleProduct = document.createElement("h1");
    titleProduct.innerText = `${products[i].title}`;
    titleProduct.classList.add("product-title");
    mainProduct.appendChild(titleProduct);

    let categoryProduct = document.createElement("h5");
    categoryProduct.innerText = `${products[i].category}`;
    categoryProduct.classList.add("product-category");
    mainProduct.appendChild(categoryProduct);

    let priceProduct = document.createElement("strong");
    priceProduct.innerText = `${products[i].price}`;
    priceProduct.classList.add("product-price");
    mainProduct.appendChild(priceProduct);
  }
  if(products[i].category == "Higiene"){

    let li = document.createElement("li");
    li.classList.add("product");
    hygieneList.appendChild(li);

    let img = document.createElement("img");
    if(products[i].image == undefined){
      img.src = "./img/products/no-img.svg"
    } else {img.src = products[i].image};
    img.alt = products[i].imageDescription;
    img.title = products[i].title;
    img.classList.add("product-img");
    li.appendChild(img);

    let mainProduct = document.createElement("main");
    mainProduct.classList.add("product-main");
    li.appendChild(mainProduct);

    let titleProduct = document.createElement("h1");
    titleProduct.innerText = `${products[i].title}`;
    titleProduct.classList.add("product-title");
    mainProduct.appendChild(titleProduct);

    let categoryProduct = document.createElement("h5");
    categoryProduct.innerText = `${products[i].category}`;
    categoryProduct.classList.add("product-category");
    mainProduct.appendChild(categoryProduct);

    let priceProduct = document.createElement("strong");
    priceProduct.innerText = `${products[i].price}`;
    priceProduct.classList.add("product-price");
    mainProduct.appendChild(priceProduct);
  }
}
