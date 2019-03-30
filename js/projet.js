var div_projet = document.getElementById('div_projet');
var parProjet = document.getElementsByClassName('parProjet')[0];
var projets = document.querySelectorAll('.projet');
var projetsLength = projets.length;
var vidPre =  document.getElementById("vidPre");
//console.log(projetsLength);

parProjet.addEventListener('click',function (){
    div_projet.innerHTML = "";
    parProjet.style.display = 'none';
});

function Projet(titre,balise,description,liens){
    this.titre = titre;
    this.balise = balise;
    this.description = description;
    this.liens = liens;
}

var tableauProjet =[
    new Projet('Catherine+Kristelle','<img src="medias/images/sister_cute.jpg" alt="Ma soeur et moi">','Dessin représentent ma soeur et moi'),
    new Projet('Cegep', '<video controls><source src="medias/video/Beaudoin Rheault Catherine tp1.mp4" type="video/mp4"></video>', 'Vidéo réaliser durant le cours de vidéo 1'),
    new Projet('Game Jam','<img src="medias/images/Game-jam.png" alt="Image du GameJam">', 'Projet réaliser lors du GameJam de Valleyfield 2019 (2e place) ','<a href="http://vps148260.vps.ovh.ca/massacreALaubergine/" target="_blank">Essayer</a>'),
    new Projet('Design-interface', '<img src="medias/images/tres-grand-ecran-accueil.png" alt="Design interface">', 'Projet de refonte graphique du MFFP de la Chasse Sportive du Québec'),
    new Projet('Ekivat','<video controls><source src="medias/video/Beaudoin Rheault Gingras tp2 partie2.mp4" type="video/mp4"></video> ','Video réaliser lors du cours de scénarisation'),
    new Projet('Retouche Couleur','<img src="medias/images/img_bougie.jpg" alt="retouche des couleurs sur bougie">','Retouche photoshop des bougies de la Cathédrale Notre-Dame de Paris'),
    new Projet('Image de base','<img src="medias/images/image_base.jpg" alt="dessin de base">','Dessin réaliser durant le cours de design graphique 1'),
    new Projet('famille_royale','<img src="medias/images/FAMILLE.png" alt="asset_tp_Video_2">','Un dessin qui a été utiliser pour le TP 2 du Cours de Vidéo 2'),
    new Projet('Catherine_GoodEnough','<img src="medias/images/maface_lol.jpg" alt="autoportrait">','Autoportrait cartoon'),
    new Projet('Son',' <video controls><source src="medias/video/William_Lauzon_Beaudoin_film_son.mov" type="video/mp4"></video>','Projet de son réaliser durant le cours de conception sonore')
];

for(let i = 0; i < projetsLength; i++){
    projets[i].addEventListener('click', trouverProjet);
}

function trouverProjet(){
    var titreProjet = this.getAttribute('data-titre');
    var projet = trouverProjetParTitre(titreProjet);
    remplacerVisuel(projet);
}

function trouverProjetParTitre(titre){
    var projetTrouver = tableauProjet.find(function(projet){
        if(projet.titre == titre)
            return projet;
    });
    return projetTrouver;
}

function remplacerVisuel(projet){
    parProjet.style.display = 'flex';
    div_projet.innerHTML = projet.balise + '<p>' + projet.description + '</p>';
    if(projet.titre == 'Game Jam' && window.innerWidth >= 900){
        div_projet.innerHTML = div_projet.innerHTML + '<p>'+projet.liens+'</p>';
    }
}

/*window.onresize = function(){
    if(window.innerWidth <= 899){
       vidPre.setAttribute("src", "medias/video/presentation_mobile.mp4");
    }
    if (window.innerWidth >= 900){
        vidPre.setAttribute("src", "medias/video/presentation.mp4");
    }
}

document.onload = function(){
    Console.log("dsdsdsds");
    if(window.innerWidth <= 899){
        vidPre.setAttribute("src", "medias/video/presentation_mobile.mp4");
        Console.log("mobile");
     }
     if (window.innerWidth >= 900){
         vidPre.setAttribute("src", "medias/video/presentation.mp4");
         Console.log("grandécran");
     }  
}*/