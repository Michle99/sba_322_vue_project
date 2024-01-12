import { createApp } from 'vue'
import App from './App.vue'
import highlightDirective from './directives/highlightDirective';
import { uppercase } from './directives/uppercase';

const app = createApp(App);
// app.use();
app.directive('highlight', highlightDirective);
app.directive('uppercase', uppercase);
app.mount('#app');
