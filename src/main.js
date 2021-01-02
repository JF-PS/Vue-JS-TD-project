import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

window.shared_data = {
  mavariable: 'Test',
  movies: [
    {title: "Star Wars",       date: "11-12-2020", director: "Arthur",  synopsis: "blablablablabla", info: false},
    {title: "Avatar",          date: "01-10-1999", director: "Jacob",   synopsis: "blablablablabla", info: false},
    {title: "Hunger Game",     date: "07-07-1540", director: "Pierrot", synopsis: "blablablablabla", info: false},
    {title: "The Maze Runner", date: "07-12-9875", director: "Pascal",  synopsis: "blablablablabla", info: false},
  ],
}


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

