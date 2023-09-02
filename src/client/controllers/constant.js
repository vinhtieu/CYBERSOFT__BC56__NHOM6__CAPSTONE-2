class Constant {
  constructor() {
    if (!Constant.instance) {
      Constant.instance = this;
      this.$ = (selector) => document.querySelector(selector);

      this.productList;
      this.cartList = [];
      this.breadcrumbList = [];

      this.addToCartBtn = this.$("#addToCartBtn");
      this.buyNowBtn = this.$("#buyNowBtn");

      this.sidebar = this.$("#sidebar");
      this.productGridSection = this.$("#productGridSection");
      this.productOverviewSection = this.$("#productOverviewSection");
      this.productCheckoutSection = this.$("#productCheckoutSection");

      this.productGrid = this.$("#productGrid");
      this.productOverview = this.$("#productOverview");
      this.productCheckout = this.$("#productCheckout");

      //Product Overview
      this.productOverviewTitle = this.$("#productOverviewTitle");

      this.cartIcon = this.$("#cart-icon");
      this.shoppingCart = this.$("#shoppingCart");
      this.emptyCart = this.$("#emptyCart");
      this.shoppingCartProducts = this.$("#shoppingCartProducts");
      this.productInCartNumber = this.$("#productInCartNumber");
      this.checkoutForm = this.$("#checkoutForm");
      this.breadcrumb = this.$("#breadcrumb");
      this.loadingAnimation = this.$("#loadingAnimation");
    }
    return Constant.instance;
  }
}
const constant = new Constant();
export default constant;
