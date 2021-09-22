<template>
  <ul>
    <li v-for="(tarefa, id) in tarefas" :key="id">
      <lv-deltarefa :tarefa="tarefa"></lv-deltarefa>
      {{ tarefa }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import LvDeltarefa from "./DelTarefa.vue";
export default {
  name: "lv-tarefas",
  components: { LvDeltarefa },
  computed: {
    ...mapGetters({
      tarefas: "listaTarefas",
    }),
  },
};
</script>
