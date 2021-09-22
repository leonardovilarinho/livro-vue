<template>
  <h1>NovoUsuario</h1>
  <button @click="falhou">Falha</button>
  <button @click="beleza">Sucesso</button>
</template>

<script>
export default {
  name: "lv-novo-usuario",
  methods: {
    falhou() {
      this.$router.replace("/usuarios/erro");
    },
    beleza() {
      this.$router.replace("/usuarios/leonardo");
    },
  },
};
</script>
