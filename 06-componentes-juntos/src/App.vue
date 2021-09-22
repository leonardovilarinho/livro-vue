<template>
  <div id="app">
    <lvBusca></lvBusca>
    <hr>
    <lv-perfil></lv-perfil>
  </div>
</template>
<script>

import lvBusca from './LvBusca.vue'
import lvPerfil from './LvPerfil.vue'

export default {
  name: 'App',
  components: {lvBusca, lvPerfil}
}
</script>