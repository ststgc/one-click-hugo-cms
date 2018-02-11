
import SubscribeIndex from "./subscribe/index";
import modal from "./helper/modal";
import loadchecker from "./helper/loadchecker";
import lazysizes from "./lazysizes/config";


// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}



