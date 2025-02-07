// Exercice de gestion d'une bibliothèque 
// 1ere étape --> SANS POO

// On commence par créer un tableau de livre, chaque livre aura, un titre, un auteur et un statut pour savoir s'il est emprunté ou non.
const livres = [
    {titre : "The Prison Healer: La Guérisseuse de Zalindov", auteur:"Lynette Noni", estEmprunte: true},
    {titre: "The Prison Healer: La Reine Rebelle", auteur:"Lynette Noni", estEmprunte: false},
    {titre: "Les OS émeraude: La Cité de Jade", auteur: "Fonda Lee", estEmprunte: false},
];

// Function pour afficher les livres 
function afficherLivres(){
    console.log("Voici la liste des livres:");
    livres.forEach((livre, index) => {
        console.log(
            `${index +1}.${livre.titre} par ${livre.auteur} - ${livre.estEmprunte ? "Emprunté" : "Disponible"}`
        );
    });
}

// fonction pour emprunter un livre par son index
function emprunterUnLivre(numeroLivre:number){
    const index = numeroLivre - 1;
    if (livres[index]){
        if (!livres[index].estEmprunte){
            livres[index].estEmprunte = true;
            console.log(`Vous avez emprunté: ${livres[index].titre}`);
        } else {
            console.log(`Le livre: ${livres[index].titre} n'est pas disponible`)
        }
    } else {
        console.log("Livre non trouvé. Veuillez vérifier le numéro.")
    }
}

// fonction pour retourner un livre 
function retourLivre(numeroLivre :number){
    const index = numeroLivre - 1 ;
    if(livres[index]){
        if(livres[index].estEmprunte){
            livres[index].estEmprunte = false;
            console.log(`Vous avez retourné le livre: ${livres[index].titre}. Merci!`);
        } else {
            console.log("Ce livre n'a pas quitté la bibliothèque");
        }
    } else {
        console.log("Ce livre est introuvable.  Veuillez vérifier le numéro.")
    }
}




// Test des fonctions
afficherLivres();
console.log("\n--- Emprunt d'un livre ---");
emprunterUnLivre(2); 
afficherLivres();

console.log("\n--- Retour d'un livre ---");
retourLivre(1); 
afficherLivres();




