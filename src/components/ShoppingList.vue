<template>
  <div class="shopping-list">
    <h2 v-if="showTitle" class="list-title">{{ title }}</h2>

    <!-- Input for adding or editing items -->
    <div class="input-section">
      <input v-uppercase v-model="newItem" placeholder="Add or edit item" class="input-field" />
      <button @click="addItem" class="add-button">{{ editingIndex === null ? 'Add' : 'Edit' }}</button>
    </div>

    <!-- Display the shopping list with v-for directive -->
    <ul v-show="items.length > 0" class="items-list">
      <li v-for="(item, index) in items" :key="index" class="list-item" v-highlight="{ condition: item.length > 5, color: 'maroon' }">
        <span :class="{ completed: completedItems.includes(index) }">{{ item }}</span>
        <button @click="completeItem(index)" class="complete-button">{{ completedItems.includes(index) ? 'Undo' : 'Complete' }}</button>
        <button @click="editItem(index)" class="edit-button">Edit</button>
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
      editingIndex: null,
      completedItems: [],
    };
  },
  watch: {
    items: {
      handler(newValue) {
        this.$emit('update:itemsList', newValue);
        this.saveToLocalStorage();
      },
      deep: true,
    },
    completedItems() {
      this.saveToLocalStorage();
    },
  },
  mounted() {
    this.loadFromLocalStorage();
  },
  methods: {
    addItem() {
      if (this.newItem.trim() !== '') {
        if (this.editingIndex === null) {
          this.items.push(this.newItem.trim());
        } else {
          this.items[this.editingIndex] = this.newItem.trim();
          this.editingIndex = null;
        }
        this.newItem = '';
      }
    },
    editItem(index) {
      this.newItem = this.items[index];
      this.editingIndex = index;
    },
    removeItem(index) {
      this.items.splice(index, 1);
      if (this.editingIndex === index) {
        this.editingIndex = null;
        this.newItem = '';
      }
    },
    completeItem(index) {
      const completedIndex = this.completedItems.indexOf(index);
      if (completedIndex !== -1) {
        this.completedItems.splice(completedIndex, 1);
      } else {
        this.completedItems.push(index);
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('shoppingListItems', JSON.stringify(this.items));
      localStorage.setItem('completedItems', JSON.stringify(this.completedItems));
    },
    loadFromLocalStorage() {
      const storedItems = localStorage.getItem('shoppingListItems');
      const storedCompletedItems = localStorage.getItem('completedItems');

      if (storedItems) {
        this.items = JSON.parse(storedItems);
      }

      if (storedCompletedItems) {
        this.completedItems = JSON.parse(storedCompletedItems);
      }
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

.add-button,
.edit-button,
.remove-button,
.complete-button {
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

.complete-button {
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
}

.complete-button:hover {
  background-color: #2980b9;
}

.remove-button {
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #e74c3c;
}

.edit-button {
  background-color: #2ecc71;
  color: #fff;
  border: none;
  cursor: pointer;
}

.edit-button:hover {
  background-color: #27ae60;
}
.empty-message {
  font-style: italic;
  color: #555;
}
.completed {
  text-decoration: line-through;
  color: #888;
}
</style>
