import constants from "./constants.js";
import Server from "./server.js";
import Page from "./page.js";

const PHONES_API = "https://64da260ee947d30a260ad89a.mockapi.io/Electronics";

document.addEventListener("DOMContentLoaded", start);

constants.tableBody.addEventListener("click", (e) => {
  const editButton = e.target.closest("#editBtn");
  if (editButton) {
    const row = e.target.closest("tr");
    const productId = row.children[0].innerText;
    Page.closeProductTable();
    Page.openProductCreationForm();
  }
});

constants.sidebar_table_btn.addEventListener("click", (param) => {
  Page.openProductTable();
  Page.closeProductCreationForm();
});
constants.sidebar_product_btn.addEventListener("click", (param) => {
  Page.closeProductTable();
  Page.openProductCreationForm();
});

function start() {
  Server.fetchData(PHONES_API);
}
