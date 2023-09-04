import constant from "./constant.js";
class Table {
  static getTableHTML = (array) => {
    let html = array.map(
      (obj) => `
      <tr class="border-b dark:border-gray-700" >
        <td
          scope="row"
          class="px-4 py-3 text-gray-900 whitespace-nowrap dark:text-white">
          ${obj.sku}
        </td>
        <td class="px-4 py-3 w-32 h-32">
          <img class="object-contain object-center w-full h-full" src="${obj.image}" onerror="this.src='https://avatars.mds.yandex.net/i?id=03c47efc307cd97f6a3d6dc5cb1cf9b2debfb70e-7761267-images-thumbs&n=13'" alt=""/>
        </td>
        <td class="px-4 py-3">${obj.name}</td>
        <td class="px-4 py-3">${obj.category}</td>
        <td class="px-4 py-3">${obj.brand}</td>
        <td class="px-4 py-3">${obj.price}</td>
        <td class="px-4 py-3">${obj.salePrice}</td>
        <td class="px-4 py-3">${obj.quantity}</td>
        <td class="px-4 py-3">
          <button
            onclick="editItem('${obj.id}')"
            class="w-[50px] h-[40px] inline-flex items-center justify-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
            type="button">
            <i class="text-lg text-blue-500 fa-solid fa-pen-to-square"></i>
          </button>
        </td>
        <td class="px-4 py-3">
          <button
            onclick="deleteItem('${obj.id}')"
            class="w-[50px] h-[40px] inline-flex items-center justify-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
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
    constant.tableAlert.innerHTML = alertHtml;
  };

  static render = (array) => {
    let html = this.getTableHTML(array);
    constant.tableBody.innerHTML = html;
  };

  static addClass = (element, type = "block") => {
    element.classList.add(type);
  };
  static removeClass = (element, type = "hidden") => {
    element.classList.remove(type);
  };

  static showTable = () => {
    this.removeClass(constant.tableBody, "hidden");
  };

  static hideTable = () => {
    this.addClass(constant.tableBody, "hidden");
  };

  static showLoading = () => {
    this.addClass(constant.tableLoading, "flex");
    this.removeClass(constant.tableLoading, "hidden");
  };
  static stopLoading = () => {
    this.addClass(constant.tableLoading, "hidden");
    this.removeClass(constant.tableLoading, "flex");
  };
}

export default Table;
