class Util {
  static show = (element, type = "block") => {
    if (type === "table") {
      element.classList.remove("hidden");
    } else {
      element.classList.add(type);
      element.classList.remove("hidden");
    }
  };
  static hide = (element, type = "block") => {
    element.classList.remove(type);
    element.classList.add("hidden");
  };

  static stringToSlug(value) {
    return value.toString().toLowerCase().replace(/ /g, "-");
  }

  static formatData = (array) => {
    const newList = array.map((product) => {
      for (const key in product) {
        let value = product[key];
        if (value * 1) {
          value = (value * 1).toLocaleString();
          product[key] = value;
        }
      }

      return product;
    });

    return newList;
  };

  static active = (element) => {
    element.classList.add("active");
  };

  static inactive = (element) => {
    element.classList.remove("active");
  };
}

export default Util;
