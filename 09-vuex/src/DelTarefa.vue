<template>
  <button @click="apagar(tarefa)">D</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    tarefa: {
      required: true,
      type: String,
    },
  },
  methods: {
    ...mapActions({
      apagar: "removerTarefa",
    }),
  },
};
</script>
