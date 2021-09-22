<template>
  <h3>Buscando rivais</h3>
  <label>Time:</label>
  <input type="text" v-model="busca">
  <p>Rival: {{ rival(busca) }}</p>
</template>

<script>
export default{
  name: 'lv-busca',
  data() {
    return {
      busca: ''
    }
  },
  methods: {
    rival(time) {
      switch( time.toLowerCase() ) {
        case 'corinthians':
          return 'palmeiras'
        case 'santos':
          return 'são paulo'
        case 'flamengo':
          return 'vasco'
        case 'cruzeiro':
          return 'em minas é marmelada'
        default:
          return 'não encontrado'
      }
    }
  }
}
</script>
