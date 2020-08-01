import './assets/style.scss'
import './assets/less.less'
import './assets/style.styl'

import png from './assets/images/plus.png'
console.log('hi')
let img =document.querySelector("#img")
img.src=png

const btn = document.createElement('button')
btn.innerText='懒加载'

btn.onclick=()=>{
    const lazy = import('./assets/lazy.js')
    lazy.then((module)=>{
       let fn =  module.default
        fn()
    })
}
document.body.appendChild(btn)