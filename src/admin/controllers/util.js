class Util {
  static add(element, type = "block") {
    element.classList.add(type);
  }

  static remove(element, type = "hidden") {
    element.classList.remove(type);
  }
}

export default Util;
