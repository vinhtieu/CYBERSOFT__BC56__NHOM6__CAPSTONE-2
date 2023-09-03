import constant from "./constant.js";

class Page {
  static show = (element, type = "block") => {
    element.classList.add(type);
    element.classList.remove("hidden");
  };
  static hide = (element, type = "block") => {
    element.classList.remove(type);
    element.classList.add("hidden");
  };

  //Get HTML
  static getProductOverviewPriceHTML = (product) => {
    return `
    <span class="mb-4 text-2xl font-base text-gray-900 sm:text-2xl">
      ${product.price}$
    </span>
        `;
  };

  static getProductOverviewImageHTML = (product) => {
    return `
        <img
        src="${product.image}"
        onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'"
        class="object-cover object-center w-full h-full" />

            `;
  };

  static getProductOverviewTitleHTML = (product) => {
    return `
    <h1
      class="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
      id="productTitle">
      ${product.name}
    </h1>

            `;
  };

  static getProductOverviewCtaHTML = (product) => {
    return `
    <button
       id="addToCartBtn"
       type="submit"
       onclick="addProduct(${product.id})"
       class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-blue-700 transition-all duration-300 ease-in-out bg-blue-200 border-2 border-blue-700 rounded-md juststify-center hover:text-white hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
       Add to cart
     </button>
     <button
       id="buyNowBtn"
       type="submit"
       onclick="buyProduct(${product.id})"
       class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
       Buy now
     </button>
            `;
  };

  static getProductOverviewDescHTML = (product) => {
    return `
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                ${product.desc}
              </div>
            `;
  };

  static getProductOverviewSpecsHTML = (product) => {
    return `
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                ${product.specs}
              </div>
            `;
  };

  static getProductGridHTML = (array) => {
    let html = array.map(
      (product) =>
        `
          <div class="min-h-[450px] px-3 py-4 rounded bg-white " onclick="showProductOverview(${product.id})">
                <!-- * Img *-->
                  <a class="h-[55%] flex items-center justify-center mb-12 sm:mb-10 md:mb-6" href="#">
                      <img class="p-2 rounded-t-lg object-contain object-center w-full h-full" src="${product.image}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'" alt="product image" />
                  </a>

                <div class="px-3">
                    <!-- *  Product Name *-->
                    <a href="#">
                        <h5 class=" text-2xl sm:text-xl  font-semibold tracking-tight text-gray-900  dark:text-white">
                            ${product.name}
                        </h5>
                    </a>

                    <!-- *  Rating Stars *-->
                    <div class="flex items-center md:mt-4 md:mb-6 sm:mt-3 mt-4 mb-5">
                        <svg class="w-5 h-5 mr-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                            />
                        </svg>
                        <svg class="w-5 h-5 mr-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                            />
                        </svg>
                        <svg class="w-5 h-5 mr-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                            />
                        </svg>
                        <svg class="w-5 h-5 mr-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                            />
                        </svg>
                        <svg class="w-5 h-5 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                            />
                        </svg>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>

                    <!-- *  Price *-->
                    <a class="flex items-center justify-between">
                        <span class="text-2xl sm:text-xl font-bold text-black  dark:text-white">${product.price}đ</span>
                    </a>
                </div>
          </div>

        `
    );

    return html.join("");
  };

  static getShoppingCartHTML = (array) => {
    let html = array.map(
      (product, index) =>
        `
          <div
          class="justify-between p-6 mb-6 bg-white rounded-lg shadow-md sm:flex sm:justify-start">
            <img
              src= "${product.image}"
              alt="product-image"
              class="w-full rounded-lg sm:w-40" />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-xl font-bold text-gray-900">
                  ${product.name}
                </h2>
                <p class="mt-1 text-lg text-gray-700">36EU - 4US</p>
                <div class="flex items-center border-gray-100 mt-8">
                  <span
                    id="removeQuantity"
                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    -
                  </span>
                  <input
                    readonly
                    class="w-8 h-8 text-xs text-center bg-white border outline-none"
                    type="number"
                    value="2"
                    min="1" />
                  <span
                  id="addQuantity"

                    class="px-3 py-1 duration-100 bg-gray-100 rounded-r cursor-pointer hover:bg-blue-500 hover:text-blue-50">
                    +
                  </span>
                </div>
                <p class="mt-4 text-xl font-semibold text-blue-600">${product.price} VND</p>
              </div>
              <div
                class="flex justify-between mt-4 sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">

                <div class="flex items-center space-x-4">
                  <svg
                  onclick="removeFromCart(${index})"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 duration-150 cursor-pointer hover:text-red-500">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
      `
    );

    return html.join("");
  };

  static getCheckoutHTML = (subTotal, tax, total) => {
    return `
        <div
          id="checkoutForm"
          class="w-full p-6 mt-6 bg-white border rounded-lg shadow-md md:mt-0 ">
          <div class=" lg:text-xl flex justify-between mb-4">
            <p class=" text-gray-700">Subtotal</p>
            <p class="text-gray-700">${subTotal} VND</p>
          </div>
          <div class="lg:text-xl flex justify-between mb-4">
            <p class="text-gray-700">VAT</p>
            <p class="text-gray-700">${tax} VND</p>
          </div>
          <hr class="my-6" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-xl font-bold">${total} VND</p>
              <p class="text-sm text-gray-700"></p>
            </div>
          </div>
          <button
            id="checkoutBtn"
            onclick="checkoutProduct()"
            class="mt-6 h-12 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
          <button
            id="paypalBtn"
            onclick="checkoutProduct()"
            class="mt-3 h-12 w-full rounded-md bg-black py-1.5 font-medium text-blue-50 cursor-pointer ">
            PayPal
          </button>
        </div>
        `;
  };

  static getBreadCrumbHTML = (array) => {
    let lastIndex = array.length - 1;
    let htmls = array.map((item, index) => {
      if (index === lastIndex) {
        if (typeof item === "object") {
          return `
         <li>
           <a
             onclick = "showProductOverview(${item.id})"
             class="before:content-['>'] before:mr-2 text-purple-700"
             >${item.name}</a>
         </li>
         `;
        } else {
          return `
          <li>
            <a
              class="before:content-['>'] before:mr-2 text-purple-700"
              >${item}</a>
          </li>
          `;
        }
      } else {
        if (typeof item === "object") {
          return `
         <li>
           <a
             onclick = "showProductOverview(${item.id})"
             class="before:content-['>'] before:mr-2 text-gray-600 hover:text-purple-700"
             >${item.name}</a>
         </li>
         `;
        } else {
          return `
          <li>
            <a
              class="before:content-['>'] before:mr-2 text-gray-600 hover:text-purple-700"
              >${item}</a>
          </li>
          `;
        }
      }
    });

    return htmls.join("");
  };

  //Render
  static renderProductOverview = (product) => {
    let imageHTML = this.getProductOverviewImageHTML(product);
    constant.productOverviewImage.innerHTML = imageHTML;
    let titleHTML = this.getProductOverviewTitleHTML(product);
    constant.productOverviewTitle.innerHTML = titleHTML;
    let priceHTML = this.getProductOverviewPriceHTML(product);
    constant.productOverviewPrice.innerHTML = priceHTML;
    let ctaHTML = this.getProductOverviewCtaHTML(product);
    constant.productOverviewCta.innerHTML = ctaHTML;
    let descHTML = this.getProductOverviewDescHTML(product);
    constant.descBody.innerHTML = descHTML;
    let specsHTML = this.getProductOverviewSpecsHTML(product);
    constant.specsBody.innerHTML = specsHTML;
  };

  static renderProductGrid = (array) => {
    let htmls = this.getProductGridHTML(array);
    constant.productGrid.innerHTML = htmls;
  };

  static renderShoppingCart = (array) => {
    let htmls = this.getShoppingCartHTML(array);
    constant.shoppingCartProducts.innerHTML = htmls;
  };

  static renderCheckoutForm = (array) => {
    if (array.length === 0) {
    }
    let priceArray = array.map((product) => product.price);
    let subTotal = priceArray.reduce((prevValue, currValue) => {
      return prevValue + currValue;
    });
    let tax = subTotal * 0.1;
    let total = subTotal + tax;
    let htmls = this.getCheckoutHTML(subTotal, tax, total);
    constant.checkoutForm.innerHTML = htmls;
  };

  static renderBreadcrumb = (array) => {
    let firstItem = `
    <li>
      <a
        onclick="showProductGrid()"
        class=" text-gray-600 hover:text-purple-700"
        >Home</a
      >
    </li>
  `;
    let html = firstItem + this.getBreadCrumbHTML(array);
    constant.breadcrumb.innerHTML = html;
  };
}

export default Page;
