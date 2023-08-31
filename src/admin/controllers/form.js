import constant from "./constant.js";

class Form {
  static add(element, type = "block") {
    element.classList.add(type);
  }

  static remove(element, type = "hidden") {
    element.classList.remove(type);
  }

  //Product Creation Form

  static showAddBtn = () => {
    this.add(constant.addBtn, "flex");
    this.remove(constant.addBtn, "hidden");
  };

  static hideAddBtn = () => {
    this.add(constant.addBtn, "hidden");
    this.remove(constant.addBtn, "flex");
  };
  static showLoadingBtn = () => {
    this.add(constant.loadingBtn, "flex");
    this.remove(constant.loadingBtn, "hidden");
  };

  static hideLoadingBtn = () => {
    this.add(constant.loadingBtn, "hidden");
    this.remove(constant.loadingBtn, "flex");
  };

  //Update Modal

  static showUpdateModalContent = () => {
    this.remove(constant.updateModalContent, "hidden");
  };

  static hideUpdateModalContent = () => {
    this.add(constant.updateModalContent, "hidden");
  };

  static showUpdateModalLoadingAnimation = () => {
    this.add(constant.updateModalLoadingAnimation, "flex");
    this.remove(constant.updateModalLoadingAnimation, "hidden");
  };

  static hideUpdateModalLoadingAnimation = () => {
    this.add(constant.updateModalLoadingAnimation, "hidden");
    this.remove(constant.updateModalLoadingAnimation, "flex");
  };
  static showUpdateModalLoadingBtn = () => {
    this.add(constant.updateModalLoadingBtn, "block");
    this.remove(constant.updateModalLoadingBtn, "hidden");
  };

  static hideUpdateModalLoadingBtn = () => {
    this.add(constant.updateModalLoadingBtn, "hidden");
    this.remove(constant.updateModalLoadingBtn, "block");
  };
  static showUpdateModalUpdateBtn = () => {
    this.add(constant.updateModalUpdateBtn, "block");
    this.remove(constant.updateModalUpdateBtn, "hidden");
  };

  static hideUpdateModalUpdateBtn = () => {
    this.add(constant.updateModalUpdateBtn, "hidden");
    this.remove(constant.updateModalUpdateBtn, "block");
  };

  //Add Modal

  static showAddModalAddBtn = () => {
    this.add(constant.addModalAddBtn, "block");
    this.remove(constant.addModalAddBtn, "hidden");
  };

  static hideAddModalAddBtn = () => {
    this.add(constant.addModalAddBtn, "hidden");
    this.remove(constant.addModalAddBtn, "block");
  };

  static showAddModalLoadingBtn = () => {
    this.add(constant.addModalLoadingBtn, "flex");
    this.remove(constant.addModalLoadingBtn, "hidden");
  };

  static hideAddModalLoadingBtn = () => {
    this.add(constant.addModalLoadingBtn, "hidden");
    this.remove(constant.addModalLoadingBtn, "flex");
  };

  static setInputsUpdateModal = ({
    sku,
    name,
    price,
    salePrice,
    condition,
    category,
    brand,
    quantity,
    image,
    overview,
    desc,
  }) => {
    constant.updateModalProductSKU.value = sku;
    constant.updateModalProductName.value = name;
    constant.updateModalProductCondition.value = condition;
    constant.updateModalProductPrice.value = price;
    constant.updateModalProductSalePrice.value = salePrice;
    constant.updateModalProductCategory.value = category;
    constant.updateModalProductBrand.value = brand;
    constant.updateModalProductQuantity.value = quantity;
    constant.updateModalImgPreview.src = image;
    constant.updateModalProductImage.value = image;
    constant.updateModalProductOverview.value = overview;
    constant.updateModalProductSpecifications.value = desc;
    // constant.updateModalProductId.value = id;
  };

  static getInputs = (modal = "") => {
    const product = {
      sku: "",
      name: "",
      condition: "",
      price: "",
      salePrice: "",
      category: "",
      brand: "",
      quantity: "",
      image: "",
      overview: "",
      specifications: "",
      id: "",
    };
    switch (modal) {
      case "updateModal":
        product.image = constant.updateModalProductImage.value;
        product.sku = constant.updateModalProductSKU.value;
        product.name = constant.updateModalProductName.value;
        product.condition = constant.updateModalProductCondition.value;
        product.price = constant.updateModalProductPrice.value;
        product.salePrice = constant.updateModalProductSalePrice.value;
        product.category = constant.updateModalProductCategory.value;
        product.brand = constant.updateModalProductBrand.value;
        product.quantity = constant.updateModalProductQuantity.value;
        product.overview = constant.updateModalProductOverview.value;
        product.specifications =
          constant.updateModalProductSpecifications.value;
        // product.id = constant.updateModalProductId.value;
        break;
      case "addModal":
        product.sku = constant.addModalProductSKU.value;
        product.name = constant.addModalProductName.value;
        product.condition = constant.addModalProductCondition.value;
        product.price = constant.addModalProductPrice.value;
        product.salePrice = constant.addModalProductSalePrice.value;
        product.category = constant.addModalProductCategory.value;
        product.brand = constant.addModalProductBrand.value;
        product.quantity = constant.addModalProductQuantity.value;
        product.image = constant.addModalProductImage.value;
        product.overview = constant.addModalProductOverview.value;
        product.specifications = constant.addModalProductSpecifications.value;
        break;
      default:
        product.image = constant.productImage.value;
        product.sku = constant.productSKU.value;
        product.name = constant.productName.value;
        product.condition = constant.productCondition.value;
        product.price = constant.productPrice.value;
        product.salePrice = constant.productSalePrice.value;
        product.category = constant.productCategory.value;
        product.brand = constant.productBrand.value;
        product.quantity = constant.productQuantity.value;
        product.overview = constant.productOverview.value;
        product.specifications = constant.productSpecifications.value;
        break;
    }

    return product;
  };

  static clearInputs = () => {
    //Product Creation Form
    constant.imgPreview.src = "";
    constant.productImage.value = "";
    constant.productSKU.value = "";
    constant.productName.value = "";
    constant.productCondition.value = "";
    constant.productPrice.value = "";
    constant.productSalePrice.value = "";
    constant.productCategory.value = "";
    constant.productBrand.value = "";
    constant.productQuantity.value = "";
    constant.productOverview.value = "";
    constant.productSpecifications.value = "";

    // Add Modal
    constant.addModalImgPreview.src = "";
    constant.addModalProductImage.value = "";
    constant.addModalProductSKU.value = "";
    constant.addModalProductName.value = "";
    constant.addModalProductCondition.value = "";
    constant.addModalProductPrice.value = "";
    constant.addModalProductSalePrice.value = "";
    constant.addModalProductCategory.value = "";
    constant.addModalProductBrand.value = "";
    constant.addModalProductQuantity.value = "";
    constant.addModalProductOverview.value = "";
    constant.addModalProductSpecifications.value = "";
  };
}

export default Form;
