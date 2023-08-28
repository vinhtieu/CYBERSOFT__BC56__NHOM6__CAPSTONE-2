class Constants {
  constructor() {
    if (!Constants.instance) {
      Constants.instance = this;
      this.$ = (selector) => document.querySelector(selector);
      this.$$ = (selector) => document.querySelectorAll(selector);

      //Sidebar
      this.sidebar_table_btn = this.$("#sidebar-table__btn");
      this.sidebar_product_btn = this.$("#sidebar-product__btn");
      this.sidebarButtons = this.$$("#sidebar-list li button");

      //Product Table
      this.productTable = this.$("#productTable");
      this.tableBody = this.$("#tableBody");
      this.tableLoading = this.$("#tableLoading");
      this.tableAlert = this.$("#tableAlert");
      this.tableRows = this.$("#tableBody");

      //Product Creation Form
      this.productCreationForm = this.$("#productCreationForm");
      this.productSKU = this.$("#productSKU");
      this.productName = this.$("#productName");
      this.productCondition = this.$("#productCondition");
      this.productPrice = this.$("#productPrice");
      this.productSalePrice = this.$("#productSalePrice");
      this.productCategory = this.$("#productCategory");
      this.productSubcategory = this.$("#productSubcategory");
      this.productQuantity = this.$("#productQuantity");
      this.productOverview = this.$("#productOverview");
      this.productSpecifications = this.$("#productSpecifications");

      // uploadImgField
      this.uploadImgField = this.$("#uploadImgField");
      this.uploadImgFieldModal = this.$("#uploadImgFieldModal");

      // productImg
      this.productImage = this.$("#productImage");
      this.productImageModal = this.$("#productImageModal");

      // imgPreview
      this.imgPreview = this.$("#imgPreview");
      this.imgPreviewModal = this.$("#imgPreviewModal");

      // imgOverlay
      this.imgOverlay = this.$("#imgOverlay");
      this.imgOverlayModal = this.$("#imgOverlayModal");

      // closeImgPreviewBtn
      this.closeImgPreviewBtn = this.$("#closeImgPreviewBtn");
      this.closeImgPreviewBtnModal = this.$("#closeImgPreviewBtnModal");

      // Buttons
      this.formAddBtn = this.$("#formAddBtn");
      this.formUpdateBtn = this.$("#formUpdateBtn");
      this.formLoadingBtn = this.$("#formLoadingBtn");
    }
    return Constants.instance;
  }
}
const constants = new Constants();
export default constants;
