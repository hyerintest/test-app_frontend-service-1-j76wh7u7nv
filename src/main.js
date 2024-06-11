import 'babel-polyfill'
import {createApp} from 'vue';
import App from './App.vue';

import store from './store/auth'
import router from './router'

import {install} from './modules/quasar'

import BaseComponents from './components/GlobalComponents';
import './styles/App.scss'

const app = createApp(App);

BaseComponents.register(app);

app.use(router);
app.use(install)
app.use(store)


app.mount('#app');
