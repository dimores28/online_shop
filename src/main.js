import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';
import 'material-design-icons-iconfont'

let app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');
