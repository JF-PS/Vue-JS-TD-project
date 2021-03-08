import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

window.shared_data = {
  mavariable: 'Test',
  movies: [
    {
      title: "Star Wars",        
      date: "11-12-2020", 
      director: [{
        firstname: "George",
        lastname: "Lucas",
        nationality: "Californie",
        birthday: "19-10-1977"
      }],  
      synopsis: "Amid a galactic civil war, Rebel Alliance spies have stolen plans to the Galactic Empire's Death Star, a massive space station capable of destroying an entire planet. Imperial Senator Princess Leia of Alderaan, secretly one of the Rebellion's leaders, has obtained its schematics, but her starship is intercepted by an Imperial Star Destroyer under the command of the ruthless Darth Vader. Before she is captured, Leia hides the plans in the memory of astromech droid R2-D2, who flees in an escape pod to the desert planet Tatooine accompanied by protocol droid C-3PO.", 
      langue: "Anglais",
      note:5,
      poster:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRjqiljH7-NHwYJo0IEB3l-kxQPBrhUMox3Yx1DRF7Vc6lweYQP"
    },
    {
      title: "Avatar",           
      date: "16-12-2009", 
      director: [{
        firstname: "James",
        lastname: "Cameron",
        nationality: "USA",
        birthday: "16-8-1954"
      }],  
      synopsis: "In 2154, humans have depleted Earth's natural resources, leading to a severe energy crisis. The Resources Development Administration (RDA) mines a valuable mineral unobtanium on Pandora, a densely forested habitable moon orbiting Polyphemus, a fictional gas giant in the Alpha Centauri star system.", 
      langue: "Anglais",
      note:0,
      poster:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Avatar-Teaser-Poster.jpg/220px-Avatar-Teaser-Poster.jpg"
    },
    { 
      title: "Hunger Game",      
      date: "07-07-1540", 
      director: [{
        firstname: "Gary",
        lastname: "Ross",
        nationality: "USA",
        birthday: "3-11-1956"
      }], 
      synopsis: "The nation of Panem is divided into 12 districts, ruled from the Capitol. As punishment for a failed revolt, each district is forced to select two tributes, one boy and one girl between the ages of 12 and 18, to fight to the death in the annual Hunger Games until there is only one survivor.", 
      langue: "Anglais",
      note:0,
      poster:"https://fr.web.img5.acsta.net/medias/nmedia/18/85/51/91/20018884.jpg"
    },
    {
      title: "The Maze Runner",  
      date: "07-12-9875", 
      director: [{
        firstname: "Wes",
        lastname: "Ball",
        nationality: "USA",
        birthday: "28-10-1980"
      }], 
      synopsis: "Thomas wakes up in a metal elevator that brings him to the Glade. He has no memory of who he is or how he got there. He gradually discovers that the Glade is run by two boys: Alby, the leader, and Newt, the second-in-charge, who both maintain order by enforcing simple but effective rules. The elevator box surfaces from under the ground once every week and supplies new food, tools, medicine, and sometimes weapons. Every month, a new boy with no memory of anything but his first name finds himself in that elevator box.", 
      langue: "Anglais",
      note:0,
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_jei5TYDLtsBGX-JiBKQYtqLG6x91dTzCDtsSneBFkYtkFYG"
    },
  ],
}


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

