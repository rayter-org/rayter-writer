import "./test.sass"

import { createApp } from 'vue'
import TestComponent from './components/TestComponent.vue'

console.log("yay!")

const el = document.createElement('div')
document.body.appendChild(el)
createApp(TestComponent, {}).mount(el)


