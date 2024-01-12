import { createApp } from 'vue'
import App from './App.vue'
import highlightDirective from './directives/highlightDirective';
import { uppercase } from './directives/uppercase';
import router from './router/index';

const app = createApp(App);

app.directive('highlight', highlightDirective);
app.directive('uppercase', uppercase);

app.use(router);
app.mount('#app');
