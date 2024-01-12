<template>
  <div class="shopping-list">
    <h2 v-if="showTitle" class="list-title">{{ title }}</h2>
    
    <!-- Input for adding items to the list with v-on directive -->
    <div class="input-section">
      <input v-uppercase v-model="newItem" placeholder="Add an item" class="input-field" @input="handleInput" />
      <button @click="addItem" class="add-button">Add</button>
    </div>

    <!-- Display the shopping list with v-for directive -->
    <ul v-show="items.length > 0" class="items-list">
      <li v-for="(item, index) in items" :key="index" class="list-item" v-highlight="{ condition: item.length > 5, color: 'maroon' }">
        {{ item }}
        <button @click="removeItem(index)" class="remove-button">Remove</button>
      </li>
    </ul>

    <!-- Show a message when the list is empty with v-if directive -->
    <p v-if="items.length === 0" class="empty-message">No items in the list.</p>
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
.shopping-list {
  max-width: 400px;
  margin: auto;
}

.list-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.input-section {
  display: flex;
  margin-bottom: 10px;
}

.input-field {
  flex: 1;
  padding: 8px;
  font-size: 1rem;
}

.add-button {
  margin-left: 10px;
  padding: 8px;
  font-size: 1rem;
  cursor: pointer;
}

.items-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
}

.remove-button {
  background-color: #ff6b6b;
  color: #fff;
  padding: 4px 8px;
  font-size: 0.8rem;
  cursor: pointer;
  border: none;
}
.empty-message {
  font-style: italic;
  color: #555;
}
</style>