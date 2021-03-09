import Vue from 'vue'
import App from './App.vue'
import router from './router'
import poster_starwars from './assets/images/star-wars.jpg'
import poster_avatar from './assets/images/Avatar.jpg'
import poster_hugergame from './assets/images/Hunger-Games.jpg'
import poster_mazerunner from './assets/images/Maze-Runner.jpg'

Vue.config.productionTip = false

window.shared_data = {
  mavariable: 'Test',
  movies: [
    {
      title: "Star Wars",        
      date: "1971-06-14", 
      director: [{
        firstname: "George",
        lastname: "Lucas",
        nationality: "Californie",
        birthday: "1944-05-14"
      }],  
      synopsis: "Le vaisseau spatial de Leia est arraisonné par l'énorme croiseur interstellaire dans lequel se trouve de Dark Vador alors qu'elle s'apprête à faire escale sur la planète désertique Tatooine. Les Impériaux pénètrent à bord et font prisonniers ses occupants, considérés comme des espions. Se sentant perdue, la princesse prend la décision de confier les plans dérobés au petit droïde R2-D23. Ce dernier s'échappe avec un autre robot du nom de C-3PO grâce à une capsule de sauvetage. Ils parviennent à atterrir sur Tatooine sans trop d'encombres mais se font rapidement capturer par des Jawas, petites créatures autochtones spécialisées dans la vente de ferraille et de composants électroniques. Ils vendent les deux droïdes à un couple de fermiers. En nettoyant les robots, leur neveu Luke Skywalker découvre par hasard un message de la princesse Leia enregistré dans R2-D2. Ce message est destiné à un général dénommé Obi-Wan Kenobi. Le jeune homme pense qu'il pourrait s'agir d'un vieil ermite, Ben Kenobi, qui vit non loin de là. Le soir venu, R2-D2 s'échappe de la ferme pour accomplir sa mission initiale, délivrer le message à Obi-Wan Kenobi. Luke part à sa recherche dès le lendemain matin avec C-3PO mais ils se font attaquer par les dangereux Hommes des Sables. Heureusement, l'intervention de Kenobi les met en déroute.", 
      langue: "Anglais",
      note:4,
      poster: poster_starwars,
      genre: "Science-Fiction"
    },
    {
      title: "Avatar",           
      date: "2009-12-16", 
      director: [{
        firstname: "James",
        lastname: "Cameron",
        nationality: "Canada",
        birthday: "1954-08-16"
      }],  
      synopsis: "Dans le futur, en l’an 2154, Jake Sully, ancien marine, paraplégique, accepte de participer au programme Avatar, pour remplacer son frère jumeau décédé, Tom Sully. Il est envoyé sur Pandora, l’une des lunes de Polyphème, une planète géante gazeuse en orbite autour d'Alpha Centauri A, l'étoile principale du système stellaire Alpha Centauri, à 4,4 années-lumière du Système solaire. Pandora, recouverte d’une jungle luxuriante, est peuplée d’une faune et d’une flore aussi magnifiques que redoutables envers les humains. L’air est irrespirable pour les terriens et la planète est habitée par les Na’vis, une espèce indigène humanoïde, considérée comme dangereuse, primitive et hostile par les Terriens. Ils peuvent atteindre trois mètres de haut, ont une peau bleu-vert et une longue queue ressemblant à celle d’un lion, et vivent en harmonie avec leur environnement. Ils possèdent également de longs filaments clairs, partant du haut de leur nuque et protégée par une natte tressée autour, grâce auxquels ils peuvent se « connecter » et communiquer avec les animaux et les plantes, qui possèdent le même organe, par la pensée et les sensations. Ils appellent cela tsaheylu, ce qui signifie « faire le lien ».", 
      langue: "Anglais",
      note:5,
      poster: poster_avatar,
      genre: "Science-Fiction"
    },
    { 
      title: "Hunger Game",      
      date: "2012-03-21", 
      director: [{
        firstname: "Gary",
        lastname: "Ross",
        nationality: "USA",
        birthday: "1956-11-03"
      }], 
      synopsis: "Katniss Everdeen, jeune fille de 16 ans, vit dans le district 12 d'un état nommé Panem, qui était précédemment l'Amérique du Nord. Les habitants des 12 districts de Panem vivent sous la coupe du Capitole, un puissant gouvernement autoritaire dirigé par le président Snow, qui a dans le passé réprimé une insurrection ayant dégénéré en guerre civile en détruisant le district 13. À la suite de cette guerre, le Capitole a décidé d'organiser chaque année un jeu télévisé, les Hunger Games, pour contrôler le peuple par la peur. Les 24 participants au jeu, qu'on nomme les « tributs », sont recrutés en tirant au sort deux adolescents, une fille et un garçon tous deux âgés de 12 à 18 ans, dans chacun des 12 districts de Panem. Les tributs doivent ensuite s'affronter dans une arène (un vaste territoire qui mélange éléments réels et virtuels, ville en ruine, forêts, fauves...) au cours d'un combat à mort, au terme duquel il ne peut y avoir qu'un seul vainqueur.", 
      langue: "Anglais",
      note:3,
      poster: poster_hugergame,
      genre: "Distopie - Science-fiction"
    },
    {
      title: "The Maze Runner",  
      date: "2014-09-11", 
      director: [{
        firstname: "Wes",
        lastname: "Ball",
        nationality: "USA",
        birthday: "1980-10-28"
      }], 
      synopsis: "Un adolescent se réveille dans un ascenseur sans souvenir de son identité. Il se retrouve parmi d'autres jeunes dans une vaste zone herbeuse appelée le « bloc », entourée de hauts murs de pierre. Les garçons (ou « blocards ») ont formé une société rudimentaire, chacun assumant des tâches spécialisées. Leur chef, Alby lui dicte les règles : ne pas paresser, ne pas s’agresser et, le plus important, ne jamais aller de l'autre côté du mur.", 
      langue: "Anglais",
      note:4,
      poster: poster_mazerunner,
      genre: "Distopie - Science-fiction"
    },
  ],
}


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

