<template>
  <div id="app">
    <router-link to="/">Inicial</router-link>
    <router-link to="/usuarios">Usuarios</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>
