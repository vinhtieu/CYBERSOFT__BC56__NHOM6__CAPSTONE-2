class Constant {
  constructor() {
    if (!Constant.instance) {
      Constant.instance = this;
      this.$ = (selector) => document.querySelector(selector);
      this.$$ = (selector) => document.querySelectorAll(selector);

      this.productList;
      this.searchList = [];
      this.sortOrder = "asc";

      this.searchBar = this.$("#simple-search");
      this.filterOptions = this.$$("#filterOptions li input");
      this.sortBtn = this.$("#sortBtn");
      this.sortOptions = this.$$("#sortOptions");
      this.sortCheckboxes = this.$$(".sortOrder input");
      this.sortAZ = this.$("#sortAZ");
      this.sortZA = this.$("#sortZA");
      this.loadingAnimation = this.$("#loadingAnimation");

      //Sidebar
      this.sidebar_table_btn = this.$("#sidebar-table__btn");
      this.sidebar_product_btn = this.$("#sidebar-product__btn");
      this.sidebarButtons = this.$$("#sidebar-list li button");

      //Product Table
      this.productTable = this.$("#productTable");
      this.tableBody = this.$("#tableBody");
      this.tableAlert = this.$("#tableAlert");
      this.tableRows = this.$("#tableBody");

      //Product Creation Form
      this.productCreationForm = this.$("#productCreationForm");
      this.imgPreview = this.$("#imgPreview");
      this.productSKU = this.$("#productSKU");
      this.productName = this.$("#productName");
      this.productCondition = this.$("#productCondition");
      this.productPrice = this.$("#productPrice");
      this.productSalePrice = this.$("#productSalePrice");
      this.productCategory = this.$("#productCategory");
      this.productBrand = this.$("#productBrand");
      this.productQuantity = this.$("#productQuantity");
      this.productImage = this.$("#productImage");
      this.productOverview = this.$("#productOverview");
      this.productSpecifications = this.$("#productSpecifications");
      this.addBtn = this.$("#addBtn");
      this.loadingBtn = this.$("#loadingBtn");

      // Update Modal
      this.updateProductModal = this.$("#updateProductModal");
      this.updateModalProductId = this.$("#updateModalProductId");
      this.updateModalImgPreview = this.$("#updateModalImgPreview");
      this.updateModalProductSKU = this.$("#updateModalProductSKU");
      this.updateModalProductName = this.$("#updateModalProductName");
      this.updateModalProductCondition = this.$("#updateModalProductCondition");
      this.updateModalProductPrice = this.$("#updateModalProductPrice");
      this.updateModalProductSalePrice = this.$("#updateModalProductSalePrice");
      this.updateModalProductCategory = this.$("#updateModalProductCategory");
      this.updateModalProductBrand = this.$("#updateModalProductBrand");
      this.updateModalProductQuantity = this.$("#updateModalProductQuantity");
      this.updateModalProductImage = this.$("#updateModalProductImage");
      this.updateModalProductOverview = this.$("#updateModalProductOverview");
      this.updateModalProductSpecifications = this.$(
        "#updateModalProductSpecifications"
      );
      this.updateModalContent = this.$("#updateModalContent");
      this.updateModalLoadingBtn = this.$("#updateModalLoadingBtn");
      this.updateModalUpdateBtn = this.$("#updateModalUpdateBtn");
      this.updateModalCloseBtn = this.$("#updateModalCloseBtn");

      // Add Modal
      this.addProductModal = this.$("#addProductModal");
      this.addModalImgPreview = this.$("#addModalImgPreview");
      this.addModalProductSKU = this.$("#addModalProductSKU");
      this.addModalProductName = this.$("#addModalProductName");
      this.addModalProductCondition = this.$("#addModalProductCondition");
      this.addModalProductPrice = this.$("#addModalProductPrice");
      this.addModalProductSalePrice = this.$("#addModalProductSalePrice");
      this.addModalProductCategory = this.$("#addModalProductCategory");
      this.addModalProductBrand = this.$("#addModalProductBrand");
      this.addModalProductQuantity = this.$("#addModalProductQuantity");
      this.addModalProductImage = this.$("#addModalProductImage");
      this.addModalProductOverview = this.$("#addModalProductOverview");
      this.addModalProductSpecifications = this.$(
        "#addModalProductSpecifications"
      );
      this.addModalOpenBtn = this.$("#addModalOpenBtn");
      this.addModalAddBtn = this.$("#addModalAddBtn");
      this.addModalLoadingBtn = this.$("#addModalLoadingBtn");

      // Alert Modal
      this.alertModal = this.$("#alertModal");
      this.confirmBtn = this.$("#confirmBtn");
      this.alertModalCloseBtn = this.$("#alertModalCloseBtn");

      // Alert Inputs

      this.alertSku = this.$("#alertSku");
      this.alertName = this.$("#alertName");
      this.alertCondition = this.$("#alertCondition");
      this.alertPrice = this.$("#alertPrice");
      this.alertCategory = this.$("#alertCategory");
      this.alertBrand = this.$("#alertBrand");
      this.alertQuantity = this.$("#alertQuantity");

      this.addModalAlertSku = this.$("#addModalAlertSku");
      this.addModalAlertName = this.$("#addModalAlertName");
      this.addModalAlertCondition = this.$("#addModalAlertCondition");
      this.addModalAlertPrice = this.$("#addModalAlertPrice");
      this.addModalAlertCategory = this.$("#addModalAlertCategory");
      this.addModalAlertBrand = this.$("#addModalAlertBrand");
      this.addModalAlertQuantity = this.$("#addModalAlertQuantity");

      this.updateModalAlertSku = this.$("#updateModalAlertSku");
      this.updateModalAlertName = this.$("#updateModalAlertName");
      this.updateModalAlertCondition = this.$("#updateModalAlertCondition");
      this.updateModalAlertPrice = this.$("#updateModalAlertPrice");
      this.updateModalAlertCategory = this.$("#updateModalAlertCategory");
      this.updateModalAlertBrand = this.$("#updateModalAlertBrand");
      this.updateModalAlertQuantity = this.$("#updateModalAlertQuantity");
    }
    return Constant.instance;
  }
}
const constant = new Constant();
export default constant;
