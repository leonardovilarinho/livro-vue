<template>
  <label>Buscar por</label>
  <input type="text" v-model="termo" />
  <ul>
    <li v-for="(tarefa, id) in resultado(termo)" :key="id">
      {{ tarefa }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return { termo: "" };
  },
  computed: {
    ...mapGetters({
      resultado: "buscaTarefas",
    }),
  },
};
</script>
