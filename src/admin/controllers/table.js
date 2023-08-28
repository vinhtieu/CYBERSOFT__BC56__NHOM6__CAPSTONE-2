import constants from "./constants.js";
import Page from "./page.js";
class Table {
  static getTableHTML = (array) => {
    let html = array.map(
      (obj) => `
      <tr class="border-b dark:border-gray-700 " id="${obj.sku}" >
            <td
              scope="row"
              class="px-4 py-3 text-gray-900 whitespace-nowrap dark:text-white">
              ${obj.sku}
            </td>
            <td class="px-4 py-3 w-32 h-32">
              <img class="object-contain object-center w-full h-full" src="${obj.image.img0}" onerror="this.src='https://avatars.mds.yandex.net/i?id=03c47efc307cd97f6a3d6dc5cb1cf9b2debfb70e-7761267-images-thumbs&n=13'" alt=""/>
            </td>
            <td class="px-4 py-3">${obj.name}</td>
            <td class="px-4 py-3">${obj.category}</td>
            <td class="px-4 py-3">${obj.brand}</td>
            <td class="px-4 py-3">${obj.price}</td>
            <td class="px-4 py-3">${obj.salePrice}</td>
            <td class="px-4 py-3">${obj.quantity}</td>
            <td class="px-4 py-3">
              <button
                id="editBtn"
                data-modal-toggle="updateProductModal"
                data-modal-target="updateProductModal"
                class="inline-flex items-center justify-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                type="button"
                >
                <i class="text-lg text-blue-500 fa-solid fa-pen-to-square"></i>
              </button>
            </td>
            <td class="px-4 py-3">
              <button
                id="deleteBtn"
                onclick="deleteItem(${obj.sku})"
                class="inline-flex items-center justify-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                type="button">
                <i class="text-lg text-red-500 fa-solid fa-trash"></i>
              </button>
            </td>
        </tr>`
    );
    return html.join("");
  };

  static alert = (error, message) => {
    let alertHtml = [];
    switch (error) {
      case "table":
        alertHtml.push(`<i class="mb-4 text-9xl fa-solid fa-inbox"></i>`);
        break;
      case "server":
        alertHtml.push(`<i class="mb-4 text-9xl fa-solid fa-server"></i>`);
        break;
      default:
        alertHtml.push(
          `<i class="mb-4 text-9xl fa-solid fa-circle-exclamation"></i>`
        );
        break;
    }

    alertHtml.push(
      `<span class="text-3xl" id="tableAlertMessage">${message}</span>`
    );
    constants.tableAlert.innerHTML = alertHtml;
  };

  static render = (array) => {
    let html = this.getTableHTML(array);
    constants.tableBody.innerHTML = html;
  };

  static loading = () => {
    constants.tableLoading.classList.remove("hidden");
    constants.tableLoading.classList.add("flex");
  };
  static stopLoading = () => {
    constants.tableLoading.classList.remove("flex");
    constants.tableLoading.classList.add("hidden");
  };
}

export default Table;
