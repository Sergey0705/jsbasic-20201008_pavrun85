function toggleText() {
  // ваш код...
  let button = document.querySelector('.toggle-text-button')
  let text = document.getElementById('text')
  button.addEventListener('click', () => {
    text.toggleAttribute('hidden')
  })
}
