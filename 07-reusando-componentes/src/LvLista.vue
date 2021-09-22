<template>
	<ul>
		<!-- mostra elementos da lista recebida -->
		<li v-for="(item, id) in lista" :key="id">{{ item }}</li>
	</ul>
</template>

<script>
export default{
	name: 'LvLista',
	props: {
		ordena: null,
		lista: {
		required: true,
		type: Array,
		default () {
			return []
		}
		}
	},
	computed: {
		listaFormatada () {
		if(typeof this.ordena != 'undefined') {
			return new Array(...this.lista).sort()
		}
		return this.lista
		}
	}
}
</script>


<style>
li {
    display: inline;
    list-style-type: none;
    padding-right: 20px;
    float: left;
}
</style>