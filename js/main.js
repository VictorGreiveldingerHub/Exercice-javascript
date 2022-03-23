const app = {
    // Fonction qui calcul le volume d'un cone
    volume: function (rayon, hauteur) {
        const aire = Math.PI * (rayon * rayon);
        let volume = aire * (hauteur / 3);
        
        return volume;
    },
    
    // Paire ou non 
    isPair: function (nombre) {
        if(nombre % 2 === 0) {
            return true;
        }
    },
    
    // Suite de fibonacci iteratif + recusrif
    
    // Trouver avec deux nombre PGCD
    
    // Renvoie tous les éléments communs d'une liste
    
    // Suite passée en parametre == palindrome ??
    
    // determiner si une adresse ip est 
    
    brutForce: function (paragraphe) {
        
      // test pour l'instant
      let alphabetics = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      
      // Décompose le paragraphe
      let chars = paragraphe.split(''); // récup une lettre
      console.log(chars);
      
      // Remplace une lettre par une autre
      for (let i = 0; i <= (alphabetics.length - 1); i++) {
        // console.log(alphabetics[i]); // => a , b etc ...
        
        alphabetics[i].replace(chars[i]);
        // console.log(chars);
        // console.log(alphabetics)
        // chars[i].replace(alphabetics[i]);
        console.log(chars);
      }
      
      console.log(paragraphe);
    },
    
    init: function () {
      app.brutForce('hello');
      console.log(app.volume(3, 5));
    }
  }

// Lorsque la page est totalement chargée, on lance la fonction app.init
document.addEventListener('DOMContentLoaded', app.init);