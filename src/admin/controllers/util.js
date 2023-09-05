import constant from "./constant.js";
import Form from "./form.js";
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

  static active = (element) => {
    element.classList.add("active");
  };

  static inactive = (element) => {
    element.classList.remove("active");
  };

  static stringToSlug(value) {
    return value.toString().toLowerCase().replace(/ /g, "-");
  }

  static formatData = (array) => {
    const newList = array.map((product) => {
      for (const key in product) {
        let value = product[key];
        if (value * 1 && value > 0) {
          value = (value * 1).toLocaleString();
          product[key] = value;
        } else if (!value || value < 1) {
          value = "N/A";
          product[key] = value;
        }
      }

      return product;
    });

    return newList;
  };

  static validateData = (inputs, form = "default") => {
    const validationRules = {
      sku: {
        pattern: /^[A-Za-z0-9\-]+$/,
        minLength: 2,
        maxLength: 50,
        alert: {
          updateModal: constant.updateModalAlertSku,
          addModal: constant.addModalAlertSku,
          default: constant.alertSku,
        },
      },
      name: {
        pattern: /^[A-Za-z0-9\s]+$/,
        minLength: 2,
        maxLength: 40,
        alert: {
          updateModal: constant.updateModalAlertName,
          addModal: constant.addModalAlertName,
          default: constant.alertName,
        },
      },
      condition: {
        alert: {
          updateModal: constant.updateModalAlertCondition,
          addModal: constant.addModalAlertCondition,
          default: constant.alertCondition,
        },
      },
      price: {
        alert: {
          updateModal: constant.updateModalAlertPrice,
          addModal: constant.addModalAlertPrice,
          default: constant.alertPrice,
        },
      },
      category: {
        alert: {
          updateModal: constant.updateModalAlertCategory,
          addModal: constant.addModalAlertCategory,
          default: constant.alertCategory,
        },
      },
      brand: {
        alert: {
          updateModal: constant.updateModalAlertBrand,
          addModal: constant.addModalAlertBrand,
          default: constant.alertBrand,
        },
      },
      quantity: {
        alert: {
          updateModal: constant.updateModalAlertQuantity,
          addModal: constant.addModalAlertQuantity,
          default: constant.alertQuantity,
        },
      },
    };
    let isValid = true;
    for (const key in validationRules) {
      if (Object.hasOwnProperty.call(validationRules, key)) {
        const rule = validationRules[key];
        const value = inputs[key];
        const id = rule.alert[form];

        switch (key) {
          case "sku":
          case "name":
            if (
              !value ||
              !rule.pattern.test(value) ||
              value.length < rule.minLength ||
              value.length > rule.maxLength
            ) {
              Form.showAlert(id);
              isValid = false;
            } else {
              Form.hideAlert(id);
            }
            break;
          default:
            if (!value) {
              Form.showAlert(id);
              isValid = false;
            } else {
              Form.hideAlert(id);
            }
            break;
        }
      }
    }

    return isValid;
  };

  static inspectItem = () => {
    let newList = constant.productList.filter((product) => {
      let value = product.brand;
      for (let element of constant.searchList) {
        value = Util.stringToSlug(value);
        element = Util.stringToSlug(element);
        if (value.includes(element)) {
          return true;
        }
      }
      return false;
    });

    return newList;
  };

  static sortItem = (key, order) => {
    constant.productList.sort((a, b) => {
      let valueA = a[key].replace(/,/g, "");
      let valueB = b[key].replace(/,/g, "");

      if (isNaN(valueA) || isNaN(valueB)) {
        return order === "asc"
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      }

      return order === "asc" ? valueA - valueB : valueB - valueA;
    });
  };
}

export default Util;
