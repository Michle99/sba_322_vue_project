export default {
    mounted(el, binding) {
      // Check if the condition is met
      if (binding.value.condition) {
        el.style.backgroundColor = binding.value.color;
      }
    },
    updated(el, binding) {
      // Handle updates if needed
      if (binding.value.condition) {
        el.style.backgroundColor = binding.value.color;
      } else {
        el.style.backgroundColor = ''; // Reset the background color if the condition is not met
      }
    },
  };