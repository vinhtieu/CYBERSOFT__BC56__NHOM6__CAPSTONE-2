class Constants {
  constructor() {
    if (!Constants.instance) {
      Constants.instance = this;
      this.$ = (selector) => document.querySelector(selector);

      //Sidebar
      this.sidebar_table_btn = this.$("#sidebar-table__btn");
      this.sidebar_product_btn = this.$("#sidebar-product__btn");

      //Product List
      this.productTable = this.$("#productTable");
      this.tableBody = this.$("#tableBody");
      this.tableLoading = this.$("#tableLoading");
      this.tableAlert = this.$("#tableAlert");

      //Product
      this.productCreationForm = this.$("#productCreationForm");
    }
    return Constants.instance;
  }
}
const constants = new Constants();
export default constants;
