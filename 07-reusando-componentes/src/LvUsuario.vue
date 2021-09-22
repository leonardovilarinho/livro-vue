<template>
  <div>
    <!-- Caixa de entrada do usuário do chat -->
    <small>{{ nome }}:</small>
    <input type="text" v-model="mensagem" />
    <button @click="enviar">Enviar</button>
  </div>
</template>

<script>
export default {
  name: "lv-usuario",
  data() {
    return { mensagem: "" };
  },
  props: ["nome"],
  methods: {
    // envia uma mensagem para o componente pai
    enviar() {
      this.$emit("novaMsg", this.nome + ": " + this.mensagem);
      this.mensagem = "";
    },
  },
};
</script>
