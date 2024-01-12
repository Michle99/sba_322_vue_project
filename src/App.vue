<template>
  <ShoppingList msg="Welcome to Your Vue.js App"/>
</template>

<script>
import ShoppingList from './components/ShoppingList.vue'

export default {
  name: 'App',
  components: {
    ShoppingList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ecf0f5;
  margin-top: 60px;
 
}

body {
  background-color: #2c3e50;
}
</style>
