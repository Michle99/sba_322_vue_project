<template>
  <div id="app">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/shopping-list">Shopping List</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      groceryTitle: "Grocery Shopping",
      groceryList: [],
      homeImprovementTitle: "Home Improvement",
      homeImprovementList: [],
    };
  },
};
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
.nav-link {
  display: inline-block;
  margin: 10px;
  padding: 10px;
  text-decoration: none;
  color: #3498db;
  font-weight: bold;
  border: 1px solid #3498db;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #3498db;
  color: #fff;
}
</style>
