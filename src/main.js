/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp, defineCustomElement } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// register
customElements.define('chart-widget', defineCustomElement(App))

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
