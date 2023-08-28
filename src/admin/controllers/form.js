import constants from "./constants.js";

class Form {
  static showLoadingBtn = () => {
    constants.formLoadingBtn.classList.add("flex");
    constants.formLoadingBtn.classList.remove("hidden");
  };
  static hideLoadingBtn = () => {
    constants.formLoadingBtn.classList.add("hidden");
    constants.formLoadingBtn.classList.remove("flex");
  };

  static showAddBtn = () => {
    constants.formAddBtn.classList.add("block");
    constants.formAddBtn.classList.remove("hidden");
  };
  static hideAddBtn = () => {
    constants.formAddBtn.classList.add("hidden");
    constants.formAddBtn.classList.remove("block");
  };
  static showUpdateBtn = () => {
    constants.formUpdateBtn.classList.add("block");
    constants.formUpdateBtn.classList.remove("hidden");
  };
  static hideUpdateBtn = () => {
    constants.formUpdateBtn.classList.add("hidden");
    constants.formUpdateBtn.classList.remove("block");
  };

  static setInputs = ({
    image,
    sku,
    name,
    price,
    salePrice,
    condition,
    category,
    subCategory,
    quantity,
    overview,
    desc,
  }) => {
    constants.productImage.value = image;
    constants.imgPreview.value = image;
    constants.productSku.value = sku;
    constants.productName.value = name;
    constants.productCondition.value = condition;
    constants.productPrice.value = price;
    constants.productSalePrice.value = salePrice;
    constants.productCategory.value = category;
    constants.productSubcategory.value = subCategory;
    constants.productQuantity.value = quantity;
    constants.productOverview.value = overview;
    constants.productSpecifications.value = desc;
  };

  static hideAllButtons = () => {
    this.hideLoadingBtn();
    this.hideAddBtn();
    this.hideUpdateBtn();
  };
}

export default Form;
