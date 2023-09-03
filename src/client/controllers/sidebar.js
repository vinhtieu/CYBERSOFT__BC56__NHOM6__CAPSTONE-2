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
                  class="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300"
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
                class="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >${condition}</label
              >
            </div>
        </li>`
    );

    return htmls.join("");
  };

  static getChipListHTML = (array) => {
    let htmls = array.map(
      (chip) =>
        `<li>
            <div
              class="flex items-center w-full p-2 mb-2 text-gray-900 pl-11">
              <input
                id="checkbox${chip}"
                type="checkbox"
                value="${chip}"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label
                for="checkbox${chip}"
                class="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >${chip}</label
              >
            </div>
        </li>`
    );

    return htmls.join("");
  };

  static getRamListHTML = (array) => {
    let htmls = array.map(
      (ram) =>
        `<li>
            <div
              class="flex items-center w-full p-2 mb-2 text-gray-900 pl-11">
              <input
                id="checkbox${ram}"
                type="checkbox"
                value="${ram}"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label
                for="checkbox${ram}"
                class="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >${ram}</label
              >
            </div>
        </li>`
    );

    return htmls.join("");
  };
  static getStorageListHTML = (array) => {
    let htmls = array.map(
      (storage) =>
        `<li>
            <div
              class="flex items-center w-full p-2 mb-2 text-gray-900 pl-11">
              <input
                id="checkbox${storage}"
                type="checkbox"
                value="${storage}"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label
                for="checkbox${storage}"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >${storage}</label
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

  static renderFilterChipOptions = (array) => {
    let chipArray = array.map((product) => product.chip);
    let reducedArray = this.reduceToArray(chipArray);
    let html = this.getChipListHTML(reducedArray);
    constant.filterChip.innerHTML = html;
  };
  static renderFilterRamOptions = (array) => {
    let ramArray = array.map((product) => product.ram);
    let reducedArray = this.reduceToArray(ramArray);
    let html = this.getRamListHTML(reducedArray);
    constant.filterRam.innerHTML = html;
  };
  static renderFilterStorageOptions = (array) => {
    let storageArray = array.map((product) => product.storage);
    let reducedArray = this.reduceToArray(storageArray);
    let html = this.getStorageListHTML(reducedArray);
    constant.filterStorage.innerHTML = html;
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
