import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';
import 'material-design-icons-iconfont'
import toFix from './filters/toFix'
import formattedPrice from './filters/price-format'

let app = createApp(App);

app.config.globalProperties.$filters = {
    toFix,
    formattedPrice,
}

app.use(store);
app.use(router);
app.mount('#app');
