<template>
  <div>
    <h2>{{ title }}</h2>
    
    <!-- Input for adding items to the list (two-way data binding) -->
    <div>
      <input v-model="newItem" placeholder="Add an item" />
      <button @click="addItem">Add</button>
    </div>

    <!-- Display the shopping list (using props) -->
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
        <button @click="removeItem(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Shopping List",
    },
    initialItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      newItem: '',
      items: [...this.initialItems], // Use props to initialize items
    };
  },
  methods: {
    addItem() {
      if (this.newItem.trim() !== '') {
        this.items.push(this.newItem.trim());
        this.newItem = '';
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
