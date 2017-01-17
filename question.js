var convertToCelsius = function(temperature) {
/*/////////////////   CONSIGNE  //////////////////////////////////
Concevoir un algorithme capable de convertir une température de degrés Farenheit en degrés Celsius. 
Pour passer d'une valeur Farenheit à une valeur Celsius, il faut appliquer la règle suivante :
§         Celsius = (Farenheit - 32) * 5/9
L'algorithme doit lire la température en degrés Farenheit, et l'afficher en Farenheit et en Celsius.
*/////////////////////////////////////////////////////////////

    var farenheit = temperature;                        //réatribution valeur temperature pour plus compréhention//
    var celsius = (farenheit - 32) * (5/9);             //execution calcul celsius//
    var reponse = Math.round(celsius);                  //attribution valeur reponse arrondi à l'entier le plus proche//
    return reponse;                                     //retourne reponse//
}

var majeur = function(age) {
/*//////////////////   CONSIGNE  /////////////////////////////////
§	Concevoir un algorithme capable retourner la valeur majeur ou mineur selon l'âge.
§	18 ou plus majeur sinon mineur
§   var age = integer;
*/////////////////////////////////////////////////////////////
    //ici je met mon code ;)
    if (age >= 18)  {                                    //comparaison age et 18//
        var reponse = "majeur"                           //si age >= que 18 alors donner "majeur" à la var reponse//
    }else if (age <=18){								 //conparaison age et 18//
        var reponse = "mineur"                           //sinon lui donner "mineur" //
    }else{												 //si pas un nombre, ne rien renvoyer//

    }                                            
    return reponse;                                      //retourne reponse//
}

var paye = function(vente) {
/*///////////////////   CONSIGNE  //////////////////////////////// 
§         L'employé reçoit 200$ par semaine comme salaire de base.
§         L'employé reçoit 6% du total des ventes hebdomadaires à prix régulier.
§         L'employé reçoit 3% du total des ventes hebdomadaires à prix rabais.
          var vente = {ventesRegulier : 0, ventesRabais : 0};				
*//////////////////////////////////////////////////////////////
    
    //ici je met mon code ;)
    const SALAIRE_BASE = 200													//etablissement constante//
    var totalVenteReg															//etablissement des variables//
    var totalVenteRab
    var paye

    var paye =(totalVenteReg*0.06+totalVenteRab*0.03)+SALAIRE_BASE				//calcul paye//
    var reponse = paye
    return reponse;                                                             //retourne reponse//
}

var cesar = function(crypto, chaine) {
/*/////////////////////   CONSIGNE  ////////////////////////////////    
§           On code avec César ;)
§           le mot a codé est dans str 
§           la clée de chiffrage est cle
§			la chaine de caractères utilisé pour codé est dans chaine	
			var crypto = {str : '', cle : 0};	
*////////////////////////////////////////////////////////////////
    
    //ici je met mon code ;)


    return reponse;
}