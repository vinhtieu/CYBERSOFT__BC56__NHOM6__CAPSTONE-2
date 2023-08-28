class Sidebar {
  static addActive = (selector) => {
    selector.classList.add("active");
  };
  static removeActive = (selector) => {
    selector.classList.remove("active");
  };
}

export default Sidebar;
