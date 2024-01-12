<template>
  <div id="app">
    <ShoppingList :title="groceryTitle" v-model:itemsList="groceryList" :showTitle="true" />
    <ShoppingList :title="homeImprovementTitle" v-model:itemsList="homeImprovementList" :showTitle="false" />
  </div>
</template>

<script>
import ShoppingList from "@/components/ShoppingList.vue";

export default {
  name: "App",
  components: {
    ShoppingList,
  },
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
</style>
