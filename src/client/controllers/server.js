import Page from "./page.js";

class Server {
  static fetch = (url, callback) => {
    Page.loading();
    axios
      .get(url)
      .then((res) => {
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        Page.stopLoading();
      });
  };
}

export default Server;
