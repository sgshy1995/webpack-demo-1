import './default.css'
import './style-one.scss'
import './style-two.less'
import './style-three.styl'
import png from './assets/one.png'

console.log('hi')

const logo = document.getElementById('logo')
logo.innerHTML = `
  <img src="${png}">
`

const div = document.getElementById('lazy-load')
const button = document.createElement('button')

button.innerText = 'I am Lazy-Load'

button.onclick = () => {
  const promise = import('./lazy')
  promise.then((module)=>{
    module.default()
  },()=>{
    console.log('Error')
  })
}

div.appendChild(button)