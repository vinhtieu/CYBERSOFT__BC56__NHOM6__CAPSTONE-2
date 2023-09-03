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
}

export default Util;
