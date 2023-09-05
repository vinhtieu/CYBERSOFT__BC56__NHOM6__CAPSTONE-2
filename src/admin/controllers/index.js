import constant from "./constant.js";
import Server from "./server.js";
import Form from "./form.js";
import Table from "./table.js";
import Sidebar from "./sidebar.js";
import Util from "./util.js";
const PHONES_API = "https://64da260ee947d30a260ad89a.mockapi.io/Phones";

document.addEventListener("DOMContentLoaded", start);

constant.searchBar.addEventListener("input", (e) => {
  const searchKey = e.target.value;
  if (!constant.searchList.includes(searchKey))
    constant.searchList.push(searchKey);

  const newList = Util.inspectItem();
  Table.render(newList);
  constant.searchList = [];
});

constant.filterOptions.forEach((option) => {
  option.addEventListener("click", () => {
    switch (option.checked) {
      case true:
        if (!constant.searchList.includes(option.id))
          constant.searchList.push(option.id);
        Util.inspectItem();
        break;
      case false:
        if (constant.searchList.includes(option.id)) {
          let index = constant.searchList.indexOf(option.id);
          constant.searchList.splice(index, 1);
        }
        break;
    }

    if (constant.searchList.length > 0) {
      const newList = Util.inspectItem();
      Table.render(newList);
    } else {
      Table.render(constant.productList);
    }
  });
});

constant.sortCheckboxes.forEach((input) => {
  input.addEventListener("click", (e) => {
    if (e.target.checked) {
      constant.sortOrder = e.target.value;
      constant.sortCheckboxes.forEach((otherInputs) => {
        if (otherInputs !== e.target) otherInputs.checked = false;
      });
    }
  });
});

constant.sortBtn.addEventListener("click", (e) => {
  const sortBy = sortOptions.value;
  Util.sortItem(sortBy, constant.sortOrder);
  Table.render(constant.productList);
});

constant.sidebar_table_btn.addEventListener("click", () => {
  Util.hide(constant.productCreationForm);
  Util.show(constant.productTable);
});

constant.sidebar_product_btn.addEventListener("click", () => {
  Util.hide(constant.productTable);
  Util.show(constant.productCreationForm);
  Form.clearInputs();
});

constant.sidebarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    constant.sidebarButtons.forEach((button) => {
      Util.inactive(button);
    });
    Util.active(button);
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

constant.updateModalCloseBtn.addEventListener("click", (e) => {
  Util.hide(constant.updateProductModal);
});

constant.addBtn.addEventListener("click", (e) => {
  const productData = Form.getInputs();
  const isValid = Util.validateData(productData);

  if (isValid) {
    Util.hide(constant.addBtn);
    Util.show(constant.loadingBtn);

    Server.post(PHONES_API, productData, Table.render);
  }
});

constant.addModalProductImage.addEventListener("input", (e) => {
  let url = e.target.value;
  constant.addModalImgPreview.src = url;
});

constant.addModalAddBtn.addEventListener("click", () => {
  const productData = Form.getInputs("addModal");
  const isValid = Util.validateData(productData, "addModal");

  if (isValid) {
    Util.hide(constant.addModalAddBtn);
    Util.show(constant.addModalLoadingBtn);
    Server.post(PHONES_API, productData, Table.render);
  }
});

constant.addModalOpenBtn.addEventListener("click", () => {
  Form.clearInputs();
});

constant.alertModalCloseBtn.addEventListener("click", () => {
  Util.hide(constant.alertModal);
});

async function editItem(id) {
  let url = `${PHONES_API}/${id}`;
  Util.show(constant.loadingAnimation, "flex");
  try {
    await Server.fetch(url, Form.setInputsUpdateModal);
  } catch (error) {
  } finally {
    Util.show(constant.updateProductModal, "flex");
    Util.show(constant.updateModalUpdateBtn);
  }

  constant.updateModalUpdateBtn.addEventListener("click", () => {
    const productData = Form.getInputs("updateModal");
    const isValid = Util.validateData(productData, "updateModal");

    if (isValid) {
      Util.hide(constant.updateModalUpdateBtn);
      Util.show(constant.updateModalLoadingBtn);
      Server.put(PHONES_API, id, productData, Table.render);
    }
  });
}

function deleteItem(id) {
  Util.show(constant.alertModal, "flex");

  constant.confirmBtn.addEventListener("click", () => {
    Util.hide(constant.alertModal);
    Util.hide(constant.productTable);
    Util.show(constant.loadingAnimation, "flex");
    Server.delete(PHONES_API, id, Table.render);
    Util.show(constant.productTable, "table");
  });
}

function start() {
  window.editItem = editItem;
  window.deleteItem = deleteItem;
  Util.show(constant.loadingAnimation, "flex");
  Util.hide(constant.tableBody);
  Server.fetch(PHONES_API, (data) => {
    Table.render(data);
  });
  Util.show(constant.tableBody, "table");
}
