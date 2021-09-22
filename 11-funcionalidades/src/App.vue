<template>
  <div id="app">
    <div v-formato="'maiusculo'" v-ola>
      Meu textinho {{ $ola() }}
    </div><br>

    <div v-formato.minusculo>
      Meu textinho
    </div><br>
    <div v-formato.maiusculo>
      Meu textinho
    </div><br>
    <div v-formato.capitalizado>
      Meu textinho
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>