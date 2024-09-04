// Variables
const prodContProd = document.querySelector("#products");
const prodContIndex = document.querySelector("#prod-index");
const prodContCart = document.querySelector("#prod-cart");

const prod1 = {
  imgSrc: "img/21-inch-car.jpg",
  name: "21Inc",
  price: 599,
};
const prod2 = {
  imgSrc: "img/high.jpg ",
  name: "High",
  price: 299,
  
};
const prod3 = {
  imgSrc: "img/audi.jpg ",
  name: "Audi",
  price: 399,
};
const prod4 = {
  imgSrc: "img/New-Hot-Car-Alloy-Wheel-Rims-for-Toyota.jpg",
  name: "Hot",
  price: 399,
  };

  const prod5 = {
    imgSrc:"img/H96e914dd0a424342805ba31195e7e76bZ.jpg_300x300.jpg",
    name: "Devil",
    price: 399,
    };
const prod6 = {
  imgSrc: "img/mercdes.jpg",
  name: "Mercedes",
  price: 599,
};

const prod7 = {
  imgSrc:"img/IMG_8881.jpg",
  name: "Spider-Verse",
  price: 399,
  };
  const prod8 = {
    imgSrc:"img/bmw.jpg",
    name: "BMW",
    price: 599,
  };
  const prod9 = {
    imgSrc:"img/71kIDGkJUEL.jpg",
    name: "Deadpool",
    price: 599,
  }
  const prod10 = {
    imgSrc:"img/61c7mfwrObL._AC_UF894,1000_QL80_.jpg",
    name: "White Spider-Verse",
    price: 599,
  }
const arr = [
  prod1,
  prod2,
  prod5,
  prod10,
  prod8,
  prod6,
  prod3,
  prod7,
prod4,
prod9
];

// Function to display products on products.html
const displayProducts = () => {
  for (let i = 0; i < arr.length; i++) {
    // Get values
    let imgSrc = arr[i].imgSrc;
    let name = arr[i].name;
    let price = arr[i].price;
    const check = "prod";
    createProd(imgSrc, name, price, check);
  }
};

// Function to display products on index.html
const displayProdIndex = () => {
  for (let i = 0; i < 5; i++) {
    // Get values
    let imgSrc = arr[i].imgSrc;
    let name = arr[i].name;
    let price = arr[i].price;
    const check = "index";
    createProd(imgSrc, name, price, check);
  }
};

const displayProdCart = () => {
  for (let i = 0; i < 2; i++) {
    // Get values
    let imgSrc = arr[i].imgSrc;
    let name = arr[i].name;
    let price = arr[i].price;
    createCartProd(imgSrc, name, price);
  }
};

// Function to create elements
const createProd = (imgSrc, name, price, check) => {
  let divProd = document.createElement("div");
  let imgProd = document.createElement("img");
  let nameProd = document.createElement("h4");
  let priceProd = document.createElement("p");
  let buttonProd = document.createElement("button");
  let divOverlay = document.createElement("div");
  let prodDesc = document.createElement("p");
  let buttonMore = document.createElement("button");

  // Set values on elements
  imgProd.src = imgSrc;
  nameProd.innerText = name;
  priceProd.innerText = "$" + price;
  buttonProd.innerText = "Add to cart";
  prodDesc.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sunt quam alias soluta ad, labore quas velit rem dolorum eius cum laboriosam magni provident similique!";
  buttonMore.innerText = "More info";

  // Add classes on elements
  priceProd.className = "price";
  buttonProd.className = "atc-btn";
  buttonMore.className = "rm-btn";
  divOverlay.className = "overlay";
  prodDesc.className = "description";
  divProd.className = "img-products";

  // Add elements to div
  divOverlay.appendChild(prodDesc);
  divOverlay.appendChild(buttonMore);
  divOverlay.appendChild(buttonProd);
  divProd.appendChild(imgProd);
  divProd.appendChild(nameProd);
  divProd.appendChild(priceProd);
  divProd.appendChild(divOverlay);
  if (check === "prod") {
    prodContProd.appendChild(divProd);
  } else if (check === "index") {
    prodContIndex.appendChild(divProd);
  }
};

const createCartProd = (imgSrc, name, price) => {
  let divProd = document.createElement("div");
  let imgProd = document.createElement("img");
  let descProd = document.createElement("div");
  let nameProd = document.createElement("h4");
  let priceProd = document.createElement("p");
  let amountDiv = document.createElement("div");
  let plusIcon = document.createElement("i");
  let minusIcon = document.createElement("i");
  let amount = document.createElement("p");
  let icons = document.createElement("div");
  let closeIcon = document.createElement("p");
  let favoriteIcon = document.createElement("i");

  // Set values on elements
  imgProd.src = imgSrc;
  nameProd.innerText = name;
  priceProd.innerText = "$" + price;
  amount.innerText = " 1 ";

  divProd.className = "cart-prod";
  descProd.className = "desc-prod";
  amountDiv.className = "amount-div";
  plusIcon.className = "fa-regular fa-square-plus";
  minusIcon.className = "fa-regular fa-square-minus";
  icons.className = "cart-icons";
  closeIcon.className = "fa-regular fa-rectangle-xmark";
  favoriteIcon.className = "fa-solid fa-heart";

  // Add elements to div
  divProd.appendChild(imgProd);
  descProd.appendChild(nameProd);
  descProd.appendChild(priceProd);
  amountDiv.appendChild(minusIcon);
  amountDiv.appendChild(amount);
  amountDiv.appendChild(plusIcon);
  descProd.appendChild(amountDiv);
  divProd.appendChild(descProd);
  icons.appendChild(closeIcon);
  icons.appendChild(favoriteIcon);
  divProd.appendChild(icons);
  prodContCart.appendChild(divProd);
};

// Function for mobile menu
const hamburgerMenu = () => {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};
