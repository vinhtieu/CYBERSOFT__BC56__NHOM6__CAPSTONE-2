import constant from "../controllers/constant.js";
import Page from "../controllers/page.js";
import Sidebar from "../controllers/sidebar.js";
import Util from "../controllers/util.js";

const PHONES_API = "https://64da260ee947d30a260ad89a.mockapi.io/Phones";

document.addEventListener("DOMContentLoaded", start);

constant.filterBrand.addEventListener("click", (e) => {
  if (e.target.nodeName === "LABLE" || e.target.nodeName === "INPUT") {
    handleCheckboxes(e, "brand", constant.checkedBrands);
    handleShowingFilteredProductGrid();
  }
});

constant.filterCondition.addEventListener("click", (e) => {
  if (e.target.nodeName === "LABLE" || e.target.nodeName === "INPUT") {
    handleCheckboxes(e, "condition", constant.checkedConditions);
    handleShowingFilteredProductGrid();
  }
});
constant.filterChip.addEventListener("click", (e) => {
  if (e.target.nodeName === "LABLE" || e.target.nodeName === "INPUT") {
    handleCheckboxes(e, "chip", constant.checkedChips);
    handleShowingFilteredProductGrid();
  }
});
constant.filterRam.addEventListener("click", (e) => {
  if (e.target.nodeName === "LABLE" || e.target.nodeName === "INPUT") {
    handleCheckboxes(e, "ram", constant.checkedRams);
    handleShowingFilteredProductGrid();
  }
});
constant.filterStorage.addEventListener("click", (e) => {
  if (e.target.nodeName === "LABLE" || e.target.nodeName === "INPUT") {
    handleCheckboxes(e, "storage", constant.checkedStorages);
    handleShowingFilteredProductGrid();
  }
});

constant.searchBar.addEventListener("input", (e) => {
  const searchKey = e.target.value;
  const result = searchProduct(searchKey);
  Page.renderProductGrid(result);
});

constant.cartIcon.addEventListener("click", () => {
  handleShowingProductCheckOut();
  handleShowingBreadCrumb("Checkout");
});

function handleCheckboxes(e, key, element) {
  const checkedKey = key;
  const value = toString(e.target.value);
  const isExisted = element.includes(value);
  if (e.target.checked) {
    if (!isExisted) element.push(value);
    handleAddingKeysToObj(checkedKey, element);
  } else {
    if (isExisted) {
      const index = element.indexOf(value);
      element.splice(index, 1);
      if (element.length === 0) {
        delete constant.checkedItems[checkedKey];
      }
    }
  }
}

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

function handleShowingFilteredProductGrid() {
  const isEmpty = Util.inspectObject(constant.checkedItems);
  if (isEmpty) {
    Page.renderProductGrid(constant.productList);
  } else {
    const product = filter(constant.checkedItems);
    Page.renderProductGrid(product);
  }
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

  const product = getProductByKey(id);

  handleShowingBreadCrumb(product);
  Page.renderProductOverview(product);
  Page.show(constant.productOverviewSection);
}

function handleShowingProductCheckOut() {
  Page.hide(constant.sidebar);
  Page.hide(constant.productGridSection);
  Page.hide(constant.productOverviewSection);
  Page.show(constant.productCheckoutSection, "flex");

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

function handleShowingSuccessModal() {
  constant.successModal.classList.add("opacity-100");
  constant.successModal.classList.add("visible");
  constant.successModal.classList.remove("opacity-0");
  constant.successModal.classList.remove("invisible");
}

function handleHidingSuccessModal() {
  constant.successModal.classList.remove("opacity-100");
  constant.successModal.classList.remove("visible");
  constant.successModal.classList.add("opacity-0");
  constant.successModal.classList.add("invisible");
}

function handleAddingKeysToObj(key, value) {
  if (constant.checkedItems.hasOwnProperty(key)) {
    constant.checkedItems[key] = value;
  } else {
    constant.checkedItems[key] = value;
  }
}

function searchProduct(searchKey) {
  let productData = constant.productList.filter((product) => {
    for (const key in product) {
      if (Object.hasOwnProperty.call(product, key)) {
        if (
          key !== "image" &&
          key !== "desc" &&
          key !== "specs" &&
          key !== "sku" &&
          key !== "price" &&
          key !== "salePrice" &&
          key !== "quantity"
        ) {
          let value = product[key];
          value = toString(value);
          searchKey = toString(searchKey);
          if (value.includes(searchKey)) {
            return true;
          }
        }
      }
    }

    return false;
  });

  return productData;
}

function getProductByKey(searchKey) {
  let productData;
  constant.productList.forEach((product) => {
    for (const key in product) {
      if (Object.hasOwnProperty.call(product, key)) {
        if (
          key !== "image" &&
          key !== "desc" &&
          key !== "specs" &&
          key !== "sku" &&
          key !== "price" &&
          key !== "salePrice" &&
          key !== "quantity"
        ) {
          let value = product[key];
          value = toString(value);
          searchKey = toString(searchKey);
          if (value === searchKey) {
            productData = product;
            break;
          }
        }
      }
    }

    return productData;
  });

  return productData;
}

function toString(element) {
  return element.toString().toLowerCase().replace(/ /g, "-");
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

function buyProduct() {
  handleShowingSuccessModal();
  setInterval(() => {
    handleHidingSuccessModal();
  }, 1000);
}

function addProduct(productId) {
  e.preventDefault();
  const product = getProductByKey(productId);
  constant.cartList.push(product);
  localStorage.setItem("cartList", JSON.stringify(constant.cartList));
  checkProductInCart();
}

function filter(checkedItems) {
  const length = Object.keys(checkedItems).length;
  let fullfilConditions;
  let currProduct;
  let chosenProducts = [];

  constant.productList.forEach((product) => {
    fullfilConditions = 0;
    currProduct = product;
    for (const key in product) {
      if (product.hasOwnProperty(key) && checkedItems.hasOwnProperty(key)) {
        for (let element of checkedItems[key]) {
          let value = product[key];
          value = toString(value);
          element = toString(element);
          if (value === element) {
            fullfilConditions++;
          }
        }
      }
    }
    if (fullfilConditions === length) chosenProducts.push(currProduct);
  });

  return chosenProducts;
}

function checkoutProduct() {
  constant.cartList = [];
  localStorage.setItem("cartList", JSON.stringify(constant.cartList));
  handleShowingProductCheckOut();
  checkProductInCart();
  handleShowingSuccessModal();
  setInterval(() => {
    handleHidingSuccessModal();
  }, 1000);
}

function removeFromCart(id) {
  constant.cartList.splice(id, 1);
  localStorage.setItem("cartList", JSON.stringify(constant.cartList));
  handleShowingProductCheckOut();
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
      constant.productList = Util.formatData(res.data);
      Page.renderProductGrid(constant.productList);
      Sidebar.renderFilterBrandOptions(constant.productList);
      Sidebar.renderFilterConditionOptions(constant.productList);
      Sidebar.renderFilterChipOptions(constant.productList);
      Sidebar.renderFilterRamOptions(constant.productList);
      Sidebar.renderFilterStorageOptions(constant.productList);
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
  window.handleShowingProductGrid = handleShowingProductGrid;
  window.handleShowingProductOverview = handleShowingProductOverview;
  window.handleShowingProductCheckOut = handleShowingProductCheckOut;
  window.buyProduct = buyProduct;
  window.addProduct = addProduct;
  window.checkoutProduct = checkoutProduct;
  window.removeFromCart = removeFromCart;

  fetch(PHONES_API);
  let data = localStorage.getItem("cartList");
  constant.cartList = JSON.parse(data) || [];
  checkProductInCart();
}
