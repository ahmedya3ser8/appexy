let clicked = false;
const btnToggle = document.getElementById('toggle');

document.documentElement.classList.toggle(
  'dark',
  localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
)

if (localStorage.theme === 'dark') {
  clicked = true;
}

btnToggle.addEventListener('click', function() {
  if (clicked) {
    btnToggle.innerHTML = 'dark mode';
    localStorage.theme = 'light';
    clicked = false;
  } else {
    btnToggle.innerHTML = 'light mode';
    localStorage.theme = 'dark';
    clicked = true;
  }
  document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
})
