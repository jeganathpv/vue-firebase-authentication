import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/compat/app'
// import { initializeApp } from 'firebase/app'
import 'firebase/compat/auth'

const configOptions = {
  apiKey: 'api-key',
  authDomain: 'fir-auth-netcore.firebaseapp.com',
  projectId: 'fir-auth-netcore',
  storageBucket: 'fir-auth-netcore.appspot.com',
  messagingSenderId: '8888',
  appId: 'app-id',
  measurementId: '8888'
}

firebase.initializeApp(configOptions)

const auth = firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

export default auth

createApp(App).use(store).use(router).mount('#app')
