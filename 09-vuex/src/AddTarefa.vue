<template>
  <input type="text" v-model="tarefa" />
  <button @click="submeterTarefa">Adicionar</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "lv-addtarefa",
  data: () => ({
    tarefa: "",
  }),
  methods: {
    ...mapActions({
      adicionar: "adicionarTarefa",
    }),
    submeterTarefa() {
      if (this.tarefa != "") this.adicionar(this.tarefa);
      this.tarefa = "";
    },
  },
};
</script>
