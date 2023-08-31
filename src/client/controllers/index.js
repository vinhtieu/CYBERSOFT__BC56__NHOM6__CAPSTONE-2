import constant from "../controllers/constant.js";

const PHONES_API = "https://64da260ee947d30a260ad89a.mockapi.io/Phones";

document.addEventListener("DOMContentLoaded", start);
constant.cartIcon.addEventListener("click", () => {
  console.log("ok");
  const pages = document.querySelectorAll("#content div");
  pages.forEach((page) => {
    console.log(page);
  });
});

function show(element, type) {
  element.classList.add(type);
  element.classList.remove("hidden");
}

function hide(element, type) {
  element.classList.remove(type);
  element.classList.add("hidden");
}

function hideAll(element) {}

function viewProductDetail(productId) {
  const url = `${PHONES_API}/${productId}`;
  Server.fetch(url, Page.renderProductOverview);
  hide(constant.productGrid, "grid");
  show(constant.productOverview, "block");
}

function start() {
  window.viewProductDetail = viewProductDetail;
  Server.fetch(PHONES_API, Product.render);
}
