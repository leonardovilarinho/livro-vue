<template>
  <div>
    <!-- Apenas mostra titulos do comentario, usando o filtro da mixin -->
    <h4>Comentários de {{ maiusculo("artigo X") }}</h4>
  </div>
</template>

<script>
import postagem from "./postagem";
export default {
  name: "lv-comentarios",
  // importa a mixin
  mixins: [postagem],
};
</script>
