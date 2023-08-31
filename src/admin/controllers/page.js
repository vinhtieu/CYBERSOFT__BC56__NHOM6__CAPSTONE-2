import constant from "./constant.js";

class Page {
  static openProductCreationForm = () => {
    constant.productCreationForm.classList.add("flex");
    constant.productCreationForm.classList.remove("hidden");
  };
  static closeProductCreationForm = () => {
    constant.productCreationForm.classList.add("hidden");
    constant.productCreationForm.classList.remove("flex");
  };
  static openProductTable = () => {
    constant.productTable.classList.add("flex");
    constant.productTable.classList.remove("hidden");
  };
  static closeProductTable = () => {
    constant.productTable.classList.add("hidden");
    constant.productTable.classList.remove("flex");
  };
}

export default Page;
