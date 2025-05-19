import './styles/main.less'

import { createApp } from 'vue'
import 'amfe-flexible'
import { createPinia } from 'pinia'

import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
// 引入国际化
import { i18n } from './lang/index'
// // Add type declaration for vue3-country-intl
// import Vue3CountryIntl from 'vue3-country-intl';
// // 引入css
// import 'vue3-country-intl/lib/vue3-country-intl.css'


// import vue3videoPlay from 'vue3-video-play' // 引入组件
// import 'vue3-video-play/dist/style.css' // 引入css
const app = createApp(App);

/* globalProperties一个用于注册能够被应用内所有组件实例访问到的全局属性的对象。 */
// app.config.globalProperties.$i18n = i18n; 

app.use(i18n)  // 挂载i18n
// app.use(Vue3CountryIntl);
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(vue3videoPlay)

app.mount('#app')
