<template>
  <h1>Notificação</h1>
  <p v-if="msg == 'erro'">Erro ao cadastrar usuário</p>
  <p v-if="msg != 'erro'">Olá, {{ msg }}</p>
</template>

<script>
export default {
  name: "lv-notificacao",
  props: ["msg"],
};
</script>
