import { createApp } from "vue";
import VFormato from "./formato";
import Plugin from "./plugin";

import App from "./App.vue";

const app = createApp(App);
app.directive("formato", VFormato);
app.use(Plugin);

app.mount("#app");
