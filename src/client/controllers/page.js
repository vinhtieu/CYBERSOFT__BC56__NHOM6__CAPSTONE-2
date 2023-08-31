import constant from "./constant.js";

class Page {
  static loading = () => {
    constant.content.classList.add("block");
    constant.content.classList.remove("hidden");
  };
  static stopLoading = () => {
    constant.content.classList.remove("block");
    constant.content.classList.add("hidden");
  };

  static getHTML = (array) => {
    let html = array.map((product) => {
      `
            <div class="grid grid-flow-row pt-6">
            <div class="grid grid-cols-3 gap-2">
              <!-- * Image *-->
              <div class="flex items-center justify-center col-span-2 bg-white">
                <figure class="max-h-[640px] max-w-[550px] sm:px-6 lg:px-8">
                  <img
                    src="${product.image}"
                    onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'"
                    class="object-cover object-center w-full h-full" />
                </figure>
              </div>

              <!-- * Product Detais *-->
              <div class="col-span-1">
                <!-- Product info -->
                <div
                  class="grid grid-cols-1 col-span-1 px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
                  <!-- * Options * -->
                  <div class="">
                    <div
                      class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                      <h1
                        class="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
                        id="productTitle">
                        Iphone 14 Pro Max
                      </h1>
                    </div>

                    <div class="mt-4 lg:row-span-3 lg:mt-0">
                      <h2 class="sr-only">Product information</h2>
                      <p
                        class="text-3xl tracking-tight text-gray-900"
                        id="productPrice">
                        $192
                      </p>

                      <!-- Reviews -->
                      <div class="mt-6">
                        <h3 class="sr-only">Reviews</h3>
                        <div class="flex items-center">
                          <div class="flex items-center">
                            <!-- Active: "text-gray-900", Default: "text-gray-200" -->
                            <svg
                              class="flex-shrink-0 w-5 h-5 text-gray-900"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true">
                              <path
                                fill-rule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clip-rule="evenodd" />
                            </svg>
                            <svg
                              class="flex-shrink-0 w-5 h-5 text-gray-900"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true">
                              <path
                                fill-rule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clip-rule="evenodd" />
                            </svg>
                            <svg
                              class="flex-shrink-0 w-5 h-5 text-gray-900"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true">
                              <path
                                fill-rule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clip-rule="evenodd" />
                            </svg>
                            <svg
                              class="flex-shrink-0 w-5 h-5 text-gray-900"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true">
                              <path
                                fill-rule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clip-rule="evenodd" />
                            </svg>
                            <svg
                              class="flex-shrink-0 w-5 h-5 text-gray-200"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true">
                              <path
                                fill-rule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clip-rule="evenodd" />
                            </svg>
                          </div>
                          <p class="sr-only">4 out of 5 stars</p>
                          <a
                            href="#"
                            class="ml-3 text-sm font-medium text-blue-600 hover:text-blue-500"
                            >117 reviews</a
                          >
                        </div>
                      </div>

                      <form class="mt-10">
                        <!-- Colors -->
                        <div>
                          <h3 class="text-sm font-medium text-gray-900">Color</h3>

                          <fieldset class="mt-4">
                            <legend class="sr-only">Choose a color</legend>
                            <div class="flex items-center space-x-3">
                              <!--
                     Active and Checked: "ring ring-offset-1"
                     Not Active and Checked: "ring-2"
                   -->
                              <label
                                class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                                <input
                                  type="radio"
                                  name="color-choice"
                                  value="White"
                                  class="sr-only"
                                  aria-labelledby="color-choice-0-label" />
                                <span id="color-choice-0-label" class="sr-only"
                                  >White</span
                                >
                                <span
                                  aria-hidden="true"
                                  class="w-8 h-8 bg-white border border-black rounded-full border-opacity-10"></span>
                              </label>
                              <!--
                     Active and Checked: "ring ring-offset-1"
                     Not Active and Checked: "ring-2"
                   -->
                              <label
                                class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                                <input
                                  type="radio"
                                  name="color-choice"
                                  value="Gray"
                                  class="sr-only"
                                  aria-labelledby="color-choice-1-label" />
                                <span id="color-choice-1-label" class="sr-only"
                                  >Gray</span
                                >
                                <span
                                  aria-hidden="true"
                                  class="w-8 h-8 bg-gray-200 border border-black rounded-full border-opacity-10"></span>
                              </label>
                              <!--
                     Active and Checked: "ring ring-offset-1"
                     Not Active and Checked: "ring-2"
                   -->
                              <label
                                class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                                <input
                                  type="radio"
                                  name="color-choice"
                                  value="Black"
                                  class="sr-only"
                                  aria-labelledby="color-choice-2-label" />
                                <span id="color-choice-2-label" class="sr-only"
                                  >Black</span
                                >
                                <span
                                  aria-hidden="true"
                                  class="w-8 h-8 bg-gray-900 border border-black rounded-full border-opacity-10"></span>
                              </label>
                            </div>
                          </fieldset>
                        </div>

                        <!-- Sizes -->
                        <div class="mt-10">
                          <label
                            for="countries"
                            class="block mt-4 mb-4 text-sm font-medium text-gray-900 dark:text-white"
                            >Select an option</label
                          >
                          <!-- <select
                            id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select> -->

                          <div class="flex gap-2">
                            <button
                              class="p-2 text-base text-black border border-black rounded active:text-white active:bg-black">
                              128GB
                            </button>
                            <button
                              class="p-2 text-base text-black border border-black rounded active:text-white active:bg-black">
                              256GB
                            </button>
                            <button
                              class="p-2 text-base text-black border border-black rounded active:text-white active:bg-black">
                              512GB
                            </button>
                            <button
                              class="p-2 text-base text-black border border-black rounded active:text-white active:bg-black">
                              1TB
                            </button>
                          </div>
                        </div>

                        <button
                          type="submit"
                          class="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-blue-700 transition-all duration-300 ease-in-out bg-blue-200 border-2 border-blue-700 rounded-md juststify-center hover:text-white hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                          Add to cart
                        </button>
                        <button
                          type="submit"
                          class="flex items-center justify-center w-full px-8 py-3 mt-5 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                          Buy now
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- * Accordion *-->
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400">
            <!-- * Overview *-->
            <div id="overview">
              <h2 id="overviewHeader">
                <button
                  type="button"
                  class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#overviewBody"
                  aria-expanded="true"
                  aria-controls="overviewBody">
                  <span class="text-2xl font-semibold">Overview</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <div
                id="overviewBody"
                class="hidden"
                aria-labelledby="overviewHeader">
                <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                  <div role="status" class="max-w-sm animate-pulse">
                    <div
                      class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- * Specs *-->
            <div id="specs">
              <h2 id="specsHeader">
                <button
                  type="button"
                  class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#specsBody"
                  aria-expanded="false"
                  aria-controls="specsBody">
                  <span class="text-2xl font-semibold">Specifications</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <div id="specsBody" class="hidden" aria-labelledby="specsHeader">
                <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                  <div role="status" class="max-w-sm animate-pulse">
                    <div
                      class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- * Questions & Answers *-->
            <div id="QA">
              <h2 id="QAHeader">
                <button
                  type="button"
                  class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#QABody"
                  aria-expanded="false"
                  aria-controls="QABody">
                  <span class="text-2xl font-semibold">Questions & Answers</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <div id="QABody" class="hidden" aria-labelledby="QAHeader">
                <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                  <div role="status" class="max-w-sm animate-pulse">
                    <div
                      class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- * Reviews *-->
            <div id="Reviews">
              <h2 id="reviewsHeader">
                <button
                  type="button"
                  class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#reviewsBody"
                  aria-expanded="false"
                  aria-controls="reviewsBody">
                  <span class="text-2xl font-semibold">Reviews</span>
                  <svg
                    data-accordion-icon
                    class="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5" />
                  </svg>
                </button>
              </h2>
              <div
                id="reviewsBody"
                class="hidden"
                aria-labelledby="reviewsHeader">
                <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                  <div role="status" class="max-w-sm animate-pulse">
                    <div
                      class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div
                      class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
            `;
    });
  };

  static renderProductOverview = (array) => {};

  static name = (param) => {};
}

export default Page;
