class Constant {
  constructor() {
    if (!Constant.instance) {
      Constant.instance = this;
      this.$ = (selector) => document.querySelector(selector);

      this.content = this.$("#content");

      this.productGrid = this.$("#productGrid");
      this.productOverview = this.$("#productOverview");
      this.cartIcon = this.$("#cart-icon");
    }
    return Constant.instance;
  }
}
const constant = new Constant();
export default constant;
