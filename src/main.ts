import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes'

import './style.css'
import 'ant-design-vue/dist/antd.css'
import 'uno.css'

const app = createApp(App)
app.use(router)
app.use(createPinia())

app.mount('#app')
