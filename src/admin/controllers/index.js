import constant from "./constant.js";
import Server from "./server.js";
import Page from "./page.js";
import Form from "./form.js";
import Table from "./table.js";
import Sidebar from "./sidebar.js";
const PHONES_API = "https://64da260ee947d30a260ad89a.mockapi.io/Phones";

document.addEventListener("DOMContentLoaded", start);

constant.searchBar.addEventListener("input", (e) => {
  let searchKey = e.target.value;
  let newList = constant.productList.filter((product) => {
    for (const key in product) {
      if (Object.hasOwnProperty.call(product, key)) {
        let value = product[key];
        let result = value.toString().toLowerCase().replace(" ", "-");
        searchKey = searchKey.toLowerCase().replace(" ", "-");
        if (result.includes(searchKey)) {
          return true;
        }
      }
    }
    return false;
  });
  Table.render(newList);
});

constant.sidebar_table_btn.addEventListener("click", () => {
  Page.openProductTable();
  Page.closeProductCreationForm();
});

constant.sidebar_product_btn.addEventListener("click", () => {
  Page.closeProductTable();
  Page.openProductCreationForm();
  Form.clearInputs();
});

constant.sidebarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    constant.sidebarButtons.forEach((button) => {
      Sidebar.removeActive(button);
    });
    Sidebar.addActive(button);
  });
});

constant.productImage.addEventListener("input", (e) => {
  let url = e.target.value;
  constant.imgPreview.src = url;
});

constant.updateModalProductImage.addEventListener("input", (e) => {
  let url = e.target.value;
  constant.updateModalImgPreview.src = url;
});

constant.addModalProductImage.addEventListener("input", (e) => {
  let url = e.target.value;
  constant.addModalImgPreview.src = url;
});

constant.addBtn.addEventListener("click", (e) => {
  const productData = Form.getInputs();
  Form.hideAddBtn();
  Form.showLoadingBtn();
  Server.post(PHONES_API, productData, (data) => {
    try {
      Table.render(data);
      throw new Error("Table is able to render data");
    } catch (err) {
      console.error(`!!!${err}!!!`);
    }
  });
});

constant.addModalAddBtn.addEventListener("click", () => {
  const productData = Form.getInputs("addModal");
  Form.hideAddModalAddBtn();
  Form.showAddModalLoadingBtn();
  Server.post(PHONES_API, productData, Table.render);
});

constant.addModalOpenBtn.addEventListener("click", () => {
  Form.clearInputs();
});

function editItem(id) {
  let url = `${PHONES_API}/${id}`;
  Form.hideUpdateModalContent();
  Form.showUpdateModalLoadingAnimation();
  Server.fetch(url, Form.setInputsUpdateModal);

  constant.updateModalUpdateBtn.addEventListener("click", () => {
    const productData = Form.getInputs("updateModal");
    Form.hideUpdateModalUpdateBtn();
    Form.showUpdateModalLoadingBtn();
    Server.put(PHONES_API, id, productData, Table.render);
  });
}

function deleteItem(id) {
  constant.confirmBtn.addEventListener("click", () => {
    Table.hideTable();
    Table.showLoading();
    Server.delete(PHONES_API, id, Table.render);
  });
}

function start() {
  window.editItem = editItem;
  window.deleteItem = deleteItem;
  Table.hideTable();
  Table.showLoading();
  Server.fetch(PHONES_API, (data) => {
    Table.render(data);
  });
}
