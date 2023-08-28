import Table from "./table.js";
import Form from "./form.js";

class Server {
  static fetch = (url, callback) => {
    Table.loading();
    axios
      .get(url)
      .then((res) => {
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        Table.stopLoading();
      });
  };
  static post = (url, content, callback) => {
    Form.hideAddBtn();
    Form.showLoadingBtn();
    axios
      .post(url, content)
      .then(() => {
        try {
          Form.hideAddBtn();
          this.fetch(url, callback);
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        Form.hideLoadingBtn();
        Form.showAddBtn();
      });
  };
  static patch = (url) => {};

  static delete = (url) => {
    Table.loading();
    axios
      .delete(url)
      .then(() => {
        try {
          this.fetch(url);
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        Table.stopLoading();
      });
  };
}

export default Server;
