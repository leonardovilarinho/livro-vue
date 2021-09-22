import { createRouter, createWebHistory } from "vue-router";
import Inicial from "../views/Inicial.vue";
const routes = [
  {
    path: "/",
    name: "Inicial",
    component: Inicial,
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    component: () =>
      import(/*	webpackChunkName:	"usuarios"	*/ "../views/Usuarios.vue"),

    children: [
      {
        path: "novo",
        name: "NovoUsuario",
        component: () =>
          import(/*	webpackChunkName:	"novo-usuario"	*/ "../views/NovoUsuario"),
      },
      {
        path: ":msg",
        name: "Notificacao",
        props: true,
        component: () =>
          import(/*	webpackChunkName:	"notificacao"	*/ "../views/Notificacao"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
