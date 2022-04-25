const $$input = document.querySelectorAll('.input-group input');

$$input.forEach((input) => {
  input.addEventListener('focus', function () {
    this.classList.add('is-focus')
  })
  input.addEventListener('blur', function () {
    this.classList.remove('is-focus')
  })
})