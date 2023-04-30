function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('dark')
}

const img = document.querySelector('#switch button img')
  if(html.classList.contains('dark')) {
    img.setAttribute('src', './icons/dark.svg')
  } else {
    img.setAttribute("src", "./icons/light.svg")
  }