import constant from "./constant.js";
import Server from "./server.js";
import Page from "./page.js";
import Form from "./form.js";
import Table from "./table.js";
import Sidebar from "./sidebar.js";
import Util from "./util.js";
const PHONES_API = "https://64da260ee947d30a260ad89a.mockapi.io/Phones";
let searchList = [];

document.addEventListener("DOMContentLoaded", start);

constant.searchBar.addEventListener("input", (e) => {
  const searchKey = e.target.value;
  if (!searchList.includes(searchKey)) searchList.push(searchKey);

  const newList = inspectItem();
  Table.render(newList);
  searchList = [];
});

constant.filterOptions.forEach((option) => {
  option.addEventListener("click", () => {
    switch (option.checked) {
      case true:
        if (!searchList.includes(option.id)) searchList.push(option.id);
        inspectItem();
        break;
      case false:
        if (searchList.includes(option.id)) {
          let index = searchList.indexOf(option.id);
          searchList.splice(index, 1);
        }
        break;
    }

    if (searchList.length > 0) {
      const newList = inspectItem();
      Table.render(newList);
    } else {
      Table.render(constant.productList);
    }
  });
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

constant.updateModalUpdateBtn.addEventListener("click", () => {
  const productData = Form.getInputs("updateModal");
  Util.hide(constant.updateModalUpdateBtn);
  Util.show(constant.updateModalLoadingBtn);
  Server.put(PHONES_API, id, productData, Table.render);
});

constant.addModalProductImage.addEventListener("input", (e) => {
  let url = e.target.value;
  constant.addModalImgPreview.src = url;
});

constant.addModalAddBtn.addEventListener("click", () => {
  const productData = Form.getInputs("addModal");
  Util.hide(constant.addModalAddBtn);
  Util.show(constant.addModalLoadingBtn);
  Server.post(PHONES_API, productData, Table.render);
});

constant.addModalOpenBtn.addEventListener("click", () => {
  Form.clearInputs();
});

constant.addBtn.addEventListener("click", (e) => {
  const productData = Form.getInputs();
  Util.hide(constant.addBtn);
  Util.show(constant.loadingBtn);
  Server.post(PHONES_API, productData, (data) => {
    try {
      Table.render(data);
      throw new Error("Table is able to render data");
    } catch (err) {
      console.error(`!!!${err}!!!`);
    }
  });
});

function stringToSlug(value) {
  return value.toString().toLowerCase().replace(/ /g, "-");
}

function inspectItem() {
  let newList = constant.productList.filter((product) => {
    for (const productKey in product) {
      if (product.hasOwnProperty(productKey) && productKey !== "image") {
        for (let element of searchList) {
          let value = product[productKey];
          value = value.stringToSlug();
          element = element.stringToSlug();
          if (value.includes(element)) {
            return true;
          }
        }
      }
    }
    return false;
  });

  return newList;
}

function editItem(id) {
  let url = `${PHONES_API}/${id}`;
  Util.hide(constant.updateModalContent);
  Util.show(constant.updateModalLoadingAnimation, "flex");
  Server.fetch(url, Form.setInputsUpdateModal);
  Util.show(constant.updateProductModal);
  Util.show(constant.updateModalContent);
}

function deleteItem(id) {
  Util.show(constant.alertModal);
  constant.confirmBtn.addEventListener("click", () => {
    Table.hideTable();
    Table.showLoading();
    Server.delete(PHONES_API, id, Table.render);
  });
}

function start() {
  window.editItem = editItem;
  window.deleteItem = deleteItem;
  Util.show(constant.tableLoading);
  Util.hide(constant.tableBody);
  Server.fetch(PHONES_API, (data) => {
    Table.render(data);
  });
}
