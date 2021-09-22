<template>
  <p>{{ total }}</p>
  <button @click="calcula('-')"> - </button>
  <button @click="calcula('+')"> + </button>

  <p>Nome Computado: {{ nomeFormatado }}</p>
  <label>Input a computar</label>
  <input v-model="nomeFormatado" type="text">

  <label>Input a observar</label>
  <input v-model="busca" type="text">
  <p v-text="resultado"></p>
</template>


<script>
export default {
  name: 'lv-contador',
  data () {
    return {
      total: 10,
      nome: 'jose antonio',
      resultado: '',
      busca: ''
    }
  },

  watch: {
    busca: function () {
      this.resultado = 'Aguardando o término da digitação...'
      this.recolheResposta()
    }
  },


  computed: {
    nomeFormatado: {
      get: function () {
        console.log('executando computed')
        return this.nome.toUpperCase()
      },
      set: function (novoValor) {
        this.nome = novoValor.substring(0, 3)
      }
    }
  },

  methods: {
    calcula( sinal ) {
      this.total = (sinal == '-') ? this.total - 1 : this.total + 1
    },

    recolheResposta() {
      let valor = this.busca
      setTimeout( () => {
        if(valor == this.busca)
          this.resultado = 'Terminou de digitar...'
      }, 500)
    }
  }
}
</script>
