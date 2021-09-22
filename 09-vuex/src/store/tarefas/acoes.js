export default {
  adicionarTarefa(contexto, valor) {
    contexto.commit('ADD_TAREFA', valor)
  },
  removerTarefa(contexto, valor) {
    contexto.commit('DEL_TAREFA', valor)
  },
}
