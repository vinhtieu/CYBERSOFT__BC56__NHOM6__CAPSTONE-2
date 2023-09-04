class Util {
  /**
   * Verify if an object is empty. Returns true if empty
   * @param {object} obj
   * @returns {boolean}
   */
  static inspectObject(obj) {
    for (const key in obj) {
      const element = obj[key];
      if (Array.isArray(element) && element.length !== 0) return false;

      if (!Array.isArray(element) && element) return false;

      if (typeof element === "object" && Object.keys(element).length !== 0)
        return inspectObject(element);
    }

    return true;
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
}

export default Util;
