// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
let config = {
  apiKey: "AIzaSyBdOhCh7e2Lk4hqnF11EEq3c21VQR5DGEs",
  authDomain: "vue-firebase-authenticat-1f572.firebaseapp.com",
  databaseURL: "https://vue-firebase-authenticat-1f572.firebaseio.com",
  projectId: "vue-firebase-authenticat-1f572",
  storageBucket: "vue-firebase-authenticat-1f572.appspot.com",
  messagingSenderId: "13508589823"
};

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});
