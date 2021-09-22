export default {
  //	o	método	mounted	é	chamado	assim	que	o	elemento	onde	a	diretiva	está	é	montado
  mounted: function (el, informacao) {
    const parametro = Object.keys(informacao.modifiers)[0];
    const acoes = {
      maiusculo() {
        el.innerHTML = el.innerHTML.toUpperCase();
      },
      minusculo() {
        el.innerHTML = el.innerHTML.toLowerCase();
      },
      capitalizado() {
        let txt = el.innerHTML.split("	");
        el.innerHTML = "";
        for (var i = 0; i < txt.length; i++) {
          el.innerHTML += txt[i].substring(0, 1).toUpperCase() + txt[i].substring(1) + "	";
        }
      },
    };
    //	executa	a	função	com	o	nome	correspondente	ao	valor	passado
    //	pelo	parâmetro
    if (parametro in acoes) {
      const acao = acoes[parametro];
      acao();
    }
  },
};
