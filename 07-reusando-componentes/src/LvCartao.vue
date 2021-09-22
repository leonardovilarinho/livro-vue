<template>
	<div class="cartao">
		<!-- estrutura de um cartao, tem o titulo, e dois slots -->
		<h2>{{ titulo }}</h2>
		<slot></slot>
		<hr>
		<slot name="rodape"></slot>
	</div>
</template>

<script>
export default{
	name: 'lv-cartao',
	// recebendo propriedades simples
	props: [ 'titulo', 'conteudo' ],
}
</script>

<style>
.cartao { border: 1px solid #000; padding: 10px; }
</style>