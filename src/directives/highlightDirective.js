export default {
    mounted(el, binding) {
      if (binding.value.condition) {
        el.style.backgroundColor = binding.value.color;
      }
    },
    updated(el, binding) {
      if (binding.value.condition) {
        el.style.backgroundColor = binding.value.color;
      } else {
        el.style.backgroundColor = '';
      }
    },
  };