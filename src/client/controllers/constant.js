class Constant {
  constructor() {
    if (!Constant.instance) {
      Constant.instance = this;
      this.$ = (selector) => document.querySelector(selector);
      this.$$ = (selector) => document.querySelectorAll(selector);

      this.productList;
      this.cartList = [];
      this.breadcrumbList = [];
      this.checkedItems = {};
      this.checkedBrands = [];
      this.loadingAnimation = this.$("#loadingAnimation");

      //Header
      this.searchBar = this.$("#searchBar");

      //Sidebar
      this.sidebar = this.$("#sidebar");
      this.filterBrand = this.$("#filterBrand");
      this.filterCondition = this.$("#filterCondition");

      //Product Grid
      this.productGrid = this.$("#productGrid");
      this.productGridSection = this.$("#productGridSection");

      //Product Checkout
      this.productCheckout = this.$("#productCheckout");
      this.productCheckoutSection = this.$("#productCheckoutSection");

      //Product Overview
      this.productOverview = this.$("#productOverview");
      this.productOverviewSection = this.$("#productOverviewSection");
      this.productOverviewImage = this.$("#productOverviewImage");
      this.productOverviewTitle = this.$("#productOverviewTitle");
      this.productOverviewPrice = this.$("#productOverviewPrice");
      this.productOverviewCta = this.$("#productOverviewCta");
      this.addToCartBtn = this.$("#addToCartBtn");
      this.buyNowBtn = this.$("#buyNowBtn");
      this.descBody = this.$("#descBody");
      this.specsBody = this.$("#specsBody");

      //Shopping Cart
      this.cartIcon = this.$("#cart-icon");
      this.shoppingCart = this.$("#shoppingCart");
      this.shoppingCartProducts = this.$("#shoppingCartProducts");
      this.productInCartNumber = this.$("#productInCartNumber");
      this.breadcrumb = this.$("#breadcrumb");

      //Checkout Form
      this.checkoutForm = this.$("#checkoutForm");
      this.checkoutBtn = this.$("#checkoutBtn");
      this.paypalBtn = this.$("#paypalBtn");

      //Empty Cart
      this.emptyCart = this.$("#emptyCart");

      //Success Modal
      this.successModal = this.$("#successModal");
    }
    return Constant.instance;
  }
}
const constant = new Constant();
export default constant;
