let tab = [];
let cpt = 0; // va contenir le nombre de comptes ajoutés


let resultat = document.getElementById('resultat');
let nbCompte = document.getElementById('nbrCompte');
let error = document.getElementById('error');

function ajouter() {
 
    //selectionner l'element input et recuperer sa valeur
    let nom = document.getElementById('name').value;
    let prenom = document.getElementById('firstName').value;
    let login = document.getElementById('login').value;
    let password = document.getElementById('mdp').value;

    if (nom != "" && prenom != "" && login != "" && password != "") {
        
        tab.push([nom, prenom, login, password]);
        //cpt++;
        console.log(tab[0][0]);
        //resultat.innerHTML = `Nom: ${tab[0]} prenom: ${tab[1]} login: ${tab[2]} mot de pass: ${tab[3]}`;
        resultat.innerHTML+="<p>Nom:" + tab[cpt][0] + " " + tab[cpt][1] + " "+ tab[cpt][2] + " " + tab[cpt][3] + " " + "</p>";
        cpt++;

    } else {
        error.innerHTML = "Remplisez les champs s'il vous plait";
    }
  
    }    


    //var donne = nom + ' ' + prenom + ' ' + login + ' ' + ' ' + password;


    // afficher la valeur
   
    //document.body.innerHTML += donne;

