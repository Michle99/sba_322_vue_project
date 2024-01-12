export const uppercase = {
    mounted(el) {
      el.addEventListener('input', function () {
        this.value = this.value.toUpperCase();

        el.dispatchEvent(new Event('input'));
      });
    },
};