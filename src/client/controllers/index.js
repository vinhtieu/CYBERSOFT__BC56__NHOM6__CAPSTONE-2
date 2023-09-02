import constant from "../controllers/constant.js";
import Page from "../controllers/page.js";
import Server from "../controllers/server.js";

const PHONES_API = "https://64da260ee947d30a260ad89a.mockapi.io/Phones";

document.addEventListener("DOMContentLoaded", start);

constant.cartIcon.addEventListener("click", () => {
  handleShowingProductCheckOut();
  handleShowingBreadCrumb("Checkout");
});

function handleShowingBreadCrumb(item) {
  const isDuplicated = checkBreadcrumbList(item);

  if (isDuplicated) {
    const currIndex = constant.breadcrumbList.indexOf(item);
    const lastIndex = constant.breadcrumbList.length - 1;

    if (currIndex !== lastIndex) {
      constant.breadcrumbList.splice(currIndex + 1);
    }
  } else {
    constant.breadcrumbList.push(item);
  }

  Page.renderBreadcrumb(constant.breadcrumbList);
  Page.show(constant.breadcrumb);
}

function handleShowingProductGrid() {
  fetch(PHONES_API);
  Page.hide(constant.productCheckoutSection);
  Page.hide(constant.productOverviewSection);
  Page.hide(constant.breadcrumb);
}

function handleShowingProductOverview(id) {
  Page.hide(constant.sidebar);
  Page.hide(constant.productGridSection);
  Page.hide(constant.productCheckoutSection);

  const product = getProductById(id);

  handleShowingBreadCrumb(product);
  Page.renderProductOverview([product]);
  Page.show(constant.productOverviewSection);
}

function handleShowingProductCheckOut() {
  Page.hide(constant.sidebar);
  Page.hide(constant.productGridSection);
  Page.hide(constant.productOverviewSection);
  Page.show(constant.productCheckoutSection);

  if (constant.cartList.length <= 0) {
    Page.show(constant.emptyCart);
    Page.hide(constant.shoppingCart);
  } else {
    Page.hide(constant.emptyCart);
    Page.show(constant.shoppingCart);
    Page.renderShoppingCart(constant.cartList);
    Page.renderCheckoutForm(constant.cartList);
  }
}

function getProductById(productId) {
  let productData;
  constant.productList.forEach((product) => {
    for (const key in product) {
      if (Object.hasOwnProperty.call(product, key)) {
        let value = product[key];
        value = toString(value);
        productId = toString(productId);
        if (value === productId) {
          productData = product;
          break;
        }
      }
    }
  });

  return productData;
}

function toString(element) {
  return element.toString().toLowerCase().replace(" ", "-");
}

function removeFromCart(id) {
  constant.cartList.splice(id, 1);
  localStorage.setItem("cartList", JSON.stringify(constant.cartList));
  handleShowingProductCheckOut();
  checkProductInCart();
}

function checkProductInCart() {
  let quantity = constant.cartList.length;

  if (quantity <= 0) {
    Page.hide(constant.productInCartNumber);
  } else {
    constant.productInCartNumber.innerText = quantity;
    Page.show(constant.productInCartNumber);
  }
}

function checkBreadcrumbList(item) {
  for (const element of constant.breadcrumbList) {
    if (
      typeof item === "object" &&
      typeof element === "object" &&
      element.id === item.id
    ) {
      return true;
    }
    if (item === element) {
      return true;
    }
  }

  return false;
}

function buyProduct(productId) {
  const product = getProductById(productId);
}

function addProduct(productId) {
  const product = getProductById(productId);
  constant.cartList.push(product);
  localStorage.setItem("cartList", JSON.stringify(constant.cartList));
  checkProductInCart();
}

function fetch(url) {
  Page.hide(constant.productCheckoutSection);
  Page.hide(constant.productOverviewSection);
  Page.hide(constant.productGridSection);
  Page.hide(constant.breadcrumb);
  Page.hide(constant.sidebar);
  Page.show(constant.loadingAnimation, "flex");
  constant.breadcrumbList = [];
  axios
    .get(url)
    .then((res) => {
      constant.productList = res.data;
      Page.renderProductGrid(constant.productList);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      Page.hide(constant.loadingAnimation);
      Page.show(constant.sidebar);
      Page.show(constant.productGridSection);
    });
}

function start() {
  window.removeFromCart = removeFromCart;
  window.showProductGrid = handleShowingProductGrid;
  window.showProductOverview = handleShowingProductOverview;
  window.showProductCheckOut = handleShowingProductCheckOut;
  window.addProduct = addProduct;
  window.buyProduct = buyProduct;
  fetch(PHONES_API);
  let data = localStorage.getItem("cartList");
  constant.cartList = JSON.parse(data);
  checkProductInCart();
}
