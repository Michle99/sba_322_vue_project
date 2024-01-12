import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
// app.use();
app.directive('highlight')
app.mount('#app');
