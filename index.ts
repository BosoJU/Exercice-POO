// Exercice de gestion d'une bibliothèque 
// 1ere étape --> SANS POO

// On modifie se tableau en une classe Livre avec des propriétes:
class Livre {
    titre: string;
    auteur: string;
    estEmprunte: boolean;

    constructor(titre: string, auteur: string, estEmprunte: boolean = false){
        this.titre = titre;
        this.auteur = auteur;
        this.estEmprunte = estEmprunte;
    }
    
    
    // fonction pour emprunter un livre 
    emprunter(){
        if (!this.estEmprunte){
            this.estEmprunte = true;
            console.log(`Vous avez emprunté le livre: ${this.titre}.`);
        } else {
            console.log(`Le livre ${this.titre} n'est pas disponible.`)
        }
    }

    // fonction pour retourner un livre 
    retourner(){
        if(this.estEmprunte){
            this.estEmprunte = false; 
            console.log(`Merci d'avoir retouné le livre: ${this.titre}.`);
        }else{
            console.log(`Le livre: ${this.titre} n'était pas emprunté.`);
        }
    }

    // Function pour afficher les livres 
    afficher(index : number){
        console.log(`${index + 1}. ${this.titre}, par ${this.auteur}, - ${this.estEmprunte ? "Emprunté" : "Disponible"}`);
    }
}

// Création de la Bibliothèque 
class Bibliothèque{
    livres: Livre[];

    constructor(){
        this.livres = [];
    }

    // Ajouter un livre dans la bibilothèque 
    ajouterLivre(livre : Livre){
        this.livres.push(livre)
    }

    // Afficher les livres de la bibliothèque
    afficherLivresBiblio(){
        console.log("Voici la liste des livres:")
        this.livres.forEach((livre, index) => {
        livre.afficher(index);
        })
    }

    emprunterLivre(numeroLivre : number){
        const index = numeroLivre - 1;
        if (this.livres[index]){
            this.livres[index].emprunter()
        } else {
            console.log("Livre introuvable.");
        }
    } 

    retourlivre(numeroLivre: number){
        const index = numeroLivre - 1;
        if (this.livres[index]){
            this.livres[index].retourner();
        } else {
            console.log("Livre introuvable.");
        } 
    }

}

// Ajout des Livres et création de la biblio
const maBibliotheque = new Bibliothèque();
maBibliotheque.ajouterLivre(new Livre("The Prison Healer: La Guerisseuse de Zalindov", "Lynette Noni", true));
maBibliotheque.ajouterLivre(new Livre("The Prison Healer: La Reine Rebelle", "Lynette Noni"));
maBibliotheque.ajouterLivre(new Livre("Les Os émeraude: La cité de Jade", "Fonda Lee"));


// Test des fonctions
maBibliotheque.afficherLivresBiblio()

console.log("\n--- Emprunt d'un livre ---");
maBibliotheque.emprunterLivre(2);
maBibliotheque.afficherLivresBiblio();

console.log("\n--- Retour d'un livre ---");
maBibliotheque.retourlivre(1);
maBibliotheque.afficherLivresBiblio();

