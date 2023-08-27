import constants from "./constants.js";

class Page {
  static openProductCreationForm = () => {
    constants.productCreationForm.classList.add("flex");
    constants.productCreationForm.classList.remove("hidden");
  };
  static closeProductCreationForm = () => {
    constants.productCreationForm.classList.add("hidden");
    constants.productCreationForm.classList.remove("flex");
  };
  static openProductTable = () => {
    constants.productTable.classList.add("flex");
    constants.productTable.classList.remove("hidden");
  };
  static closeProductTable = () => {
    constants.productTable.classList.add("hidden");
    constants.productTable.classList.remove("flex");
  };
}

export default Page;
