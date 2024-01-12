import { createApp } from 'vue'
import App from './App.vue'
import highlightDirective from './directives/highlightDirective';

const app = createApp(App);
// app.use();
app.directive('highlight', highlightDirective);
app.mount('#app');
