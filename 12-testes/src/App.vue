<template>
  <div id="app">
    <p>
      Total: <span>{{ total }}</span>
    </p>
    <button @click="subtrair" class="reduz">-</button>
    <button @click="somar" class="aumenta">+</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return { total: 0 };
  },
  methods: {
    subtrair() {
      this.total--;
    },
    somar() {
      this.total++;
    },
  },
};
</script>
