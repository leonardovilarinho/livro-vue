const OlaMundo = {};
OlaMundo.install = function (app) {
  app.config.globalProperties.$ola = () => {
    console.log("Olá	mundo	do	Vue	com	método	de	instância");
  };
  app.directive("ola", {
    mounted(el) {
      el.innerHTML = "texto	do	plugin";
    },
  });
  app.mixin({
    created: () => {
      console.log("created	executado	pelo	plugin");
    },
  });
};
export default OlaMundo;
