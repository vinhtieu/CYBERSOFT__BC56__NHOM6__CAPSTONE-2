import constant from "./constant.js";

class Sidebar {
  static getBrandListHTML = (array) => {
    let htmls = array.map(
      (object) =>
        `<li>
            <div
              class="flex items-center w-full p-2 mb-2 text-gray-900 pl-11">
              <input
                id="checkbox${object.brand}"
                type="checkbox"
                value="${object.brand}"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label
                for="checkbox${object.brand}"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >${object.brand}</label
              >
            </div>
        </li>`
    );

    return htmls.join("");
  };
  static getConditionListHTML = (array) => {
    let htmls = array.map(
      (object) =>
        `<li>
            <div
              class="flex items-center w-full p-2 mb-2 text-gray-900 pl-11">
              <input
                id="checkbox${object.brand}"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label
                for="checkbox${object.brand}"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >${object.brand}</label
              >
            </div>
        </li>`
    );

    return htmls.join("");
  };
  static renderFilterBrandOptions = (array) => {
    let html = this.getBrandListHTML(array);
    constant.filterBrand.innerHTML = html;
  };
  static renderFilterConditionOptions = (array) => {
    let html = this.getConditionListHTML(array);
    constant.filterBrand.innerHTML = html;
  };
  static fetchDateById = (url, id, callback) => {};
  static createNewData = (url, content) => {};
  static updateData = (url) => {};
  static deleteData = (url, id) => {};
}

export default Sidebar;
