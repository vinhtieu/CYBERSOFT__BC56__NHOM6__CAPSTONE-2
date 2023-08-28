import constants from "./constants.js";
import Server from "./server.js";
import Page from "./page.js";
import Table from "./table.js";
import Form from "./form.js";
import Sidebar from "./sidebar.js";

const PHONES_API = "https://64da260ee947d30a260ad89a.mockapi.io/Electronics";

document.addEventListener("DOMContentLoaded", start);

constants.sidebar_table_btn.addEventListener("click", () => {
  Page.openProductTable();
  Page.closeProductCreationForm();
});
constants.sidebar_product_btn.addEventListener("click", () => {
  Page.closeProductTable();
  Page.openProductCreationForm();
  // Form.showAddBtn();
});

constants.sidebarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    constants.sidebarButtons.forEach((button) => {
      Sidebar.removeActive(button);
    });
    Sidebar.addActive(button);
  });
});

constants.productImage.addEventListener("change", (e) => {
  handleReadingImage(e, constants.imgPreview);
  handlePreviewingImage(constants.imgPreview, constants.inputField);

  e.target.value = "";
});

constants.productImageModal.addEventListener("change", (e) => {
  handleReadingImage(e, constants.imgPreviewModal, "Modal");

  handlePreviewingImage(
    constants.imgPreviewModal,
    constants.uploadImgFieldModal
  );

  e.target.value = "";
});

constants.imgPreview.addEventListener("click", (e) => {
  handleDeletingImage(
    e,
    "closeImgPreviewBtn",
    constants.imgPreview,
    constants.uploadImgField
  );
});
constants.imgPreviewModal.addEventListener("click", (e) => {
  handleDeletingImage(
    e,
    "closeImgPreviewBtnModal",
    constants.imgPreviewModal,
    constants.uploadImgFieldModal
  );
});

constants.formAddBtn.addEventListener("click", (e) => {
  const productData = {
    image: constants.productImage.value,
    sku: constants.productSKU.value,
    name: constants.productName.value,
    condition: constants.productCondition.value,
    price: constants.productPrice.value,
    salePrice: constants.productSalePrice.value,
    category: constants.productCategory.value,
    subcategory: constants.productSubcategory.value,
    quantity: constants.productQuantity.value,
    overview: constants.productOverview.value,
    specifications: constants.productSpecifications.value,
  };

  Server.post(PHONES_API, productData, Table.render);
});

function handleReadingImage(e, imgPreview, type = "") {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      renderImg(imgPreview, type, e.target.result);

      // Clear the input field
    };

    reader.readAsDataURL(file);
  }
}

function handlePreviewingImage(imgPreview, inputField) {
  show(imgPreview);
  hide(inputField);
}

function handleDeletingImage(e, btnId, imgPreview, inputField) {
  const closeBtn = e.target.closest(`#${btnId}`);

  if (closeBtn) {
    hide(imgPreview);
    show(inputField);
  }
}

function show(element) {
  element.classList.add("flex");
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
  element.classList.remove("flex");
}

function renderImg(selector, type, src) {
  const closeBtnId = `closeImgPreviewBtn${type}`;
  const htmlString = `
    <img
        class="object-contain object-center max-w-full max-h-full align-middle mx-auto"
        src="${src}"
        alt="" />
    <i class="text-gray-500 p-2 text-lg fa-solid fa-xmark absolute top-1 right-2 cursor-pointer peer z-20 hover:text-white transition-all duration-100 ease-in-out " id="${closeBtnId}"></i>
    <div class="bg-black opacity-0 absolute top-0 left-0 w-full h-full z-10 peer-hover:opacity-30 transition-all duration-100 ease-in-out" id="imgOverlay"></div> `;
  selector.innerHTML = htmlString;
}

function deleteItem(sku) {
  let url = `${PHONES_API}/${sku}`;
  Server.delete(url);
}

function start() {
  window.deleteItem = deleteItem;
  Server.fetch(PHONES_API, Table.render);
}
