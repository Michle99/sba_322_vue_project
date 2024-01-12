<template>
  <div>
    <h2 v-if="showTitle">{{ title }}</h2>
    
    <!-- Input for adding items to the list with v-on directive -->
    <div>
      <input v-model="newItem" placeholder="Add an item" @input="handleInput" />
      <button @click="addItem">Add</button>
    </div>

    <!-- Display the shopping list with v-for directive -->
    <ul v-show="items.length > 0">
      <li v-for="(item, index) in items" :key="index" v-highlight="{ condition: item.length > 5, color: 'maroon' }">
        {{ item }}
        <button @click="removeItem(index)">Remove</button>
      </li>
    </ul>

    <!-- Show a message when the list is empty with v-if directive -->
    <p v-if="items.length === 0">No items in the list.</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    itemsList: Array,
    showTitle: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      newItem: '',
      items: this.itemsList || [],
    };
  },
  watch: {
    items(newValue) {
      this.$emit('update:itemsList', newValue);
    },
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
    handleInput() {
      console.log("Input changed!");
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
