function toggleMode() {
const html = document.documentElement
html.classList.toggle("light")  

const img = document.querySelector("#profile img")

if(html.classList.contains('light')) {
  img.setAttribute('src', './assets/avatar-light.png')
} else {
  img.setAttribute('src', './assets/Avatar.png')
}

if (html.classList.contains("light")) {
  img.setAttribute(
    "alt",
    "Foto de perfil de João Marcelo Vilas Boas usando uma camisa preta com um fundo escuro"
  )
} else {
  img.setAttribute(
    "alt",
    "Foto de perfil de João Marcelo Vilas Boas usando uma camisa preta com um fundo claro"
  )
}
}
