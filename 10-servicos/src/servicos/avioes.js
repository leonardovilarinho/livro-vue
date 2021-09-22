import { http } from "./configuracoes";

export default {
  lista: () => {
    return http.get("/dados/avioes.json");
  },
};
