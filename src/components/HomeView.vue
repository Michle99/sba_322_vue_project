<template>
  <div class="home-view">
    <h1 class="title">Welcome to Vueshop App!</h1>
    <router-link to="/shopping-list">
      <button class="go-to-button">Go to Shopping List</button>
    </router-link>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>

.home-view {
  text-align: center;
  margin-top: 50px;
}

.title {
  font-size: 2rem;
  color: #3498db;
  margin-bottom: 20px;
}

.go-to-button {
  background-color: #2ecc71; 
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.go-to-button:hover {
  background-color: #27ae60;
}
</style>
