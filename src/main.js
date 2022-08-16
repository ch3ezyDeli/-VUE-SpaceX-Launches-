import { createApp } from 'vue'
import './style.css'
import './reset.css'
import App from './App.vue'
import JQuery from 'jquery'

window.$ = JQuery

createApp(App).mount('#app')
