import { createApp } from "vue";
import App from "./App.vue";
import store from "./vuex/store";

console.log(store);

createApp(App).use(store).mount("#app");
