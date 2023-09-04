import Util from "./util.js";
import Form from "./form.js";
import constant from "./constant.js";

class Server {
  static fetch = async (url, callback) => {
    await axios
      .get(url)
      .then((res) => {
        constant.productList = res.data;
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        Util.hide(constant.loadingBtn);
        Util.hide(constant.addModalLoadingBtn);
        Util.hide(constant.updateModalLoadingBtn);
        Util.hide(constant.loadingAnimation, "flex");
        Form.clearInputs("addModal");
        Form.clearInputs();
      });
  };

  static post = async (url, content, callback) => {
    await axios
      .post(url, content)
      .then(() => {
        this.fetch(url, callback);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static put = async (url, id, content, callback) => {
    const api = `${url}/${id}`;
    await axios
      .put(api, content)
      .then(() => {
        this.fetch(url, callback);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((param) => {
        Util.show(constant.updateModalUpdateBtn);
        Util.hide(constant.updateModalLoadingBtn);
      });
  };

  static delete = async (url, id, callback) => {
    const api = url + "/" + id;
    await axios
      .delete(api)
      .then(() => {
        this.fetch(url, callback);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export default Server;
