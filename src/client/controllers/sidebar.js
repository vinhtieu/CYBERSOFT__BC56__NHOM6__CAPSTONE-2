import constant from "./constant.js";

class Sidebar {
  static getBrandListHTML = (array) => {
    let htmls = array.map(
      (brand) =>
        `<li>
            <div
              class="flex items-center w-full p-2 mb-2 text-gray-900 pl-11">
              <input
                id="checkbox${brand}"
                type="checkbox"
                value="${brand}"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label
                for="checkbox${brand}"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >${brand}</label
              >
            </div>
        </li>`
    );

    return htmls.join("");
  };

  static getConditionListHTML = (array) => {
    let htmls = array.map(
      (condition) =>
        `<li>
            <div
              class="flex items-center w-full p-2 mb-2 text-gray-900 pl-11">
              <input
                id="checkbox${condition}"
                type="checkbox"
                value="${condition}"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label
                for="checkbox${condition}"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >${condition}</label
              >
            </div>
        </li>`
    );

    return htmls.join("");
  };

  static renderFilterBrandOptions = (array) => {
    let brandArray = array.map((product) => product.brand);
    let reducedArray = this.reduceToArray(brandArray);
    let html = this.getBrandListHTML(reducedArray);
    constant.filterBrand.innerHTML = html;
  };

  static renderFilterConditionOptions = (array) => {
    let conditionArray = array.map((product) => product.condition);
    let reducedArray = this.reduceToArray(conditionArray);
    let html = this.getConditionListHTML(reducedArray);
    constant.filterCondition.innerHTML = html;
  };

  static reduceToArray = (array) => {
    const reducedArray = array.reduce((accumulator, currValue) => {
      if (!accumulator.includes(currValue)) accumulator.push(currValue);
      return accumulator;
    }, []);

    return reducedArray;
  };
  static createNewData = (url, content) => {};
  static updateData = (url) => {};
  static deleteData = (url, id) => {};
}

export default Sidebar;
