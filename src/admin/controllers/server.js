import Table from "./table.js";
import Form from "./form.js";

class Server {
  static fetch = (url, callback) => {
    axios
      .get(url)
      .then((res) => {
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        Form.hideLoadingBtn();
        Form.showAddBtn();
        Form.showUpdateModalUpdateBtn();
        Form.hideUpdateModalLoadingBtn();
        Form.hideUpdateModalLoadingAnimation();
        Form.showUpdateModalContent();
        Form.hideAddModalLoadingBtn();
        Form.showAddModalAddBtn();
        Form.clearInputs("addModal");
        Form.clearInputs();
        Table.stopLoading();
        Table.showTable();
      });
  };

  static post = (url, content, callback) => {
    axios
      .post(url, content)
      .then(() => {
        this.fetch(url, callback);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static put = (url, id, content, callback) => {
    const api = `${url}/${id}`;
    axios
      .put(api, content)
      .then(() => {
        this.fetch(url, callback);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static delete = (url, id, callback) => {
    const api = url + "/" + id;
    axios
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
