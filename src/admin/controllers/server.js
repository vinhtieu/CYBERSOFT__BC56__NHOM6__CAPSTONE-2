import Table from "./table.js";

class Server {
  static fetchData = (url, id = "none") => {
    url = id === "none" ? url : `${url}/${id}`;
    Table.loading();
    axios
      .get(url)
      .then((res) => {
        try {
          Table.render(res.data);
        } catch (err) {
          Table.alert("table", err);
        }
      })
      .catch((err) => {
        Table.alert("server", err);
      })
      .finally(() => {
        Table.stopLoading();
      });
  };
  static fetchDateById = (url, id, callback) => {};
  static createNewData = (url, content) => {};
  static updateData = (url) => {};
  static deleteData = (url, id) => {};
}

export default Server;
