<template>
  <h4>Lista um</h4>
  <lv-lista :lista="['feijão', 'arroz', 'carne']"></lv-lista>
  <br />
  <lv-lista :lista="['feijão', 'arroz', 'carne']" ordena></lv-lista>
  <br />
  <h4>Lista dois</h4>
  <lv-lista :lista="['leite', 'biscoito', 'bombom', 'aveia']" ordena></lv-lista>
  <br />
  <lv-lista :lista="['leite', 'biscoito', 'bombom', 'aveia']"></lv-lista>

  <!-- declara um cartao com titulo, conteudo e rodape  -->
  <br />
  <hr />
  <lv-cartao titulo="Preço">
    Aqui você encontra preços <strong>baixos</strong>
    <template v-slot:rodape>Meu conteúdo do rodapé</template>
  </lv-cartao>

  <!-- chama o leitor do artigo e os comentarios -->
  <br />
  <hr />
  <lv-leitor></lv-leitor>
  <lv-comentarios></lv-comentarios>

  <!-- insere usuários no chat -->
  <br />
  <hr />
  <lv-usuario nome="Filomena" @novaMsg="escrever"></lv-usuario>
  <lv-usuario nome="Amarildo" @novaMsg="escrever"></lv-usuario>
  <!-- mostra o chat na tela -->
  <br />
  <div v-html="chat"></div>
</template>

<script>
import LvCartao from "./LvCartao.vue";
import LvComentarios from "./LvComentarios.vue";
import LvLeitor from "./LvLeitor.vue";
import LvLista from "./LvLista.vue";
import LvUsuario from "./LvUsuario.vue";
export default {
  name: "app",
  components: { LvLista, LvCartao, LvLeitor, LvComentarios, LvUsuario },
  // define o chat
  data() {
    return { chat: "" };
  },
  methods: {
    // quando receber uma mensagem concatena ao chat
    escrever(mensagem) {
      this.chat = mensagem + "<hr>" + this.chat;
    },
  },
};
</script>
