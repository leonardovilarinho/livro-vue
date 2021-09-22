<template>
  <p>{{ tarefas }}</p>

  <lv-addtarefa></lv-addtarefa>
  <lv-tarefas></lv-tarefas>
  <lv-busca></lv-busca>
</template>

<script>
import LvAddtarefa from "./AddTarefa.vue";
import LvTarefas from "./Tarefas.vue";
import LvBusca from "./Busca.vue";

export default {
  name: "App",
  components: { LvAddtarefa, LvTarefas, LvBusca },
  computed: {
    tarefas() {
      return this.$store.state.tarefas;
    },
  },
};
</script>
