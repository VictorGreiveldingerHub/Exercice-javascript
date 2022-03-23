// Fonction qui calcul le volume d'un cone
function volume () {
    
}

// Paire ou non 

// Suite de fibonacci iteratif + recusrif

// Trouver avec deux nombre PGCD

// Renvoie tous les éléments communs d'une liste

// Suite passée en parametre == palindrome ??

// determiner si une adresse ip est 


const app = {
    
    brutForce: function (paragraphe) {
        
      // test pour l'instant
      let alphabetics = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      
      // Décompose le paragraphe
      let chars = paragraphe.split(''); // récup une lettre
      console.log(chars);
      
      // Remplace une lettre par une autre
      for (let i = 0; i <= (alphabetics.length - 1); i++) {
        console.log(alphabetics[i]);
        chars[0].replace(alphabetics[0]);
        console.log(chars);
      }
      
      console.log(paragraphe);
    },
    
    init: function () {
      app.brutForce('hello');
    }
  
  }
  
  // Lorsque la page est totalement chargée, on lance la fonction app.init
   document.addEventListener('DOMContentLoaded', app.init);