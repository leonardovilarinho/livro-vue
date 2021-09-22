<template>
  <h4>Lista de {{ titulo }}</h4>
  <ul>
    <li v-for="item in lista" :key="item.nome">
      {{ item.nome }} de <i>{{ item.marca }}</i>
    </li>
  </ul>
</template>

<script>
export default {
  name: "lv-lista",
  props: {
    titulo: null,
    lista: {
      required: true,
      type: Array || Object,
    },
  },
};
</script>
