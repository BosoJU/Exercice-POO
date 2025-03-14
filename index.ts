// Exercice de gestion d'une bibliothèque 


// On modifie se tableau en une classe Livre avec des propriétes:
class Livre {
    titre: string;
    auteur: string;
    estEmprunte: boolean;
    totalPage: number;

    constructor(titre: string, auteur: string, estEmprunte: boolean = false, totalPage : number){
        this.titre = titre;
        this.auteur = auteur;
        this.estEmprunte = estEmprunte;
        this.totalPage= totalPage;
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
        console.log(`${index + 1}. ${this.titre}, par ${this.auteur}, pages : ${this.totalPage} - ${this.estEmprunte ? "Emprunté" : "Disponible"}`);
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

    // emprunter les livres de la bibliothèque
    emprunterLivre(numeroLivre : number){
        const index = numeroLivre - 1;
        if (this.livres[index]){
            this.livres[index].emprunter()
        } else {
            console.log("Livre introuvable.");
        }
    } 

    // Retourner les livres de la bibliothèque
    retourlivre(numeroLivre: number){
        const index = numeroLivre - 1;
        if (this.livres[index]){
            this.livres[index].retourner();
        } else {
            console.log("Livre introuvable.");
        } 
    }

}

class Ebook {
    titre:string;
    auteur:string;
    totalPage:number;
    pageActuelle:number;

    constructor(titre:string, auteur:string, totalPage:number, pageActuelle: number){
        this.titre = titre;
        this.totalPage = totalPage;
        this.auteur = auteur;
        this.pageActuelle = pageActuelle;
    }

    // Afficher les ebooks
    lister(index:number){
        console.log(`${index + 1}. ${this.titre} par ${this.auteur} - pages: ${this.totalPage}`)
    }

    // Afficher la page
    afficherPage(index:number){
        console.log(`Lecture de ${this.titre} : Page ${this.pageActuelle} / ${this.totalPage}`);
        
    }

    // Passer à la page suivante 
    pageSuivante(index : number){
        if (this.pageActuelle === this.totalPage){
            console.log(`Félicitations, vous avez terminé le livre !`)
        } else {
            this.pageActuelle++;
            console.log(`Page suivante: ${this.pageActuelle}/ ${this.totalPage}`)
        }
    }

    // Choisir la page 
    allerA(index:number, pageActuelle : number){
        if (pageActuelle <= this.totalPage && pageActuelle > 0){
            console.log(`Lecture de: ${this.titre} : Page ${pageActuelle} / ${this.totalPage}`)
        } else {
            console.log(`Vous ne vous trouvez pas dans l'intervalle des pages possible`)
        }
    }
    
    // Passer à la page précédente 
    pagePrecedente(index:number){
        if (this.pageActuelle === 1){
        console.log(`Vous êtes à la première page / ${this.totalPage}`)
        } else { 
        this.pageActuelle--;
        console.log(`Page précédente: ${this.pageActuelle}/ ${this.totalPage}`)
        }
        
    }
}

class BibliothèqueEbook{
    ebooks : Ebook[];

    constructor(){
        this.ebooks = [];
    }

    ajouterEbook(ebook:Ebook){
        this.ebooks.push(ebook)
    }

    listerebook(){
        console.log(`Voici la liste des Ebook:`)
        this.ebooks.forEach((ebook, index) => {
            ebook.lister(index);
        })
    }

    afficherPageEbook(numeroLivre:number){
        const index = numeroLivre - 1
        if (this.ebooks[index]){
        this.ebooks[index].afficherPage(numeroLivre)
        } else {
            console.log(`Livre introuvable`)
        }

    }

    passerPage(numeroLivre:number){
        const index = numeroLivre - 1
        if (this.ebooks[index]){
            this.ebooks[index].pageSuivante(numeroLivre)
        } else {
            console.log(`Livre introuvable`)
        }
    }

    aller(numeroLivre: number, pageActuelle : number){
        const index = numeroLivre - 1
        if (this.ebooks[index]){
            this.ebooks[index].allerA(numeroLivre, pageActuelle)
        } else {
            console.log(`Livre introuvable`)
        }
    }


    revenirPage(numeroLivre:number){
        const index = numeroLivre - 1
        if (this.ebooks[index]){
            this.ebooks[index].pagePrecedente(numeroLivre)
        } else {
            console.log(`Livre introuvable`)
        
        }
    }
}



// Ajout des Livres et création de la biblio
// const maBibliotheque = new Bibliothèque();
// maBibliotheque.ajouterLivre(new Livre("The Prison Healer: La Guerisseuse de Zalindov", "Lynette Noni", true, 800));
// maBibliotheque.ajouterLivre(new Livre("The Prison Healer: La Reine Rebelle", "Lynette Noni", false, 500));
// maBibliotheque.ajouterLivre(new Livre("La cité du ciel", "Nicki Pau Preto", false, 600));


// Test des fonctions
// maBibliotheque.afficherLivresBiblio()

// console.log("\n--- Emprunt d'un livre ---");
// maBibliotheque.emprunterLivre(2);
// maBibliotheque.afficherLivresBiblio();

// console.log("\n--- Retour d'un livre ---");
// maBibliotheque.retourlivre(1);
// maBibliotheque.afficherLivresBiblio();

// Test des Ebooks + ajout des livres
const maBibliothequeEbook = new BibliothèqueEbook();
maBibliothequeEbook.ajouterEbook(new Ebook("test", "test",900, 1));
maBibliothequeEbook.ajouterEbook(new Ebook("test2", "test2",500, 1));

maBibliothequeEbook.listerebook();
maBibliothequeEbook.afficherPageEbook(1);
maBibliothequeEbook.passerPage(1)
maBibliothequeEbook.passerPage(1)
maBibliothequeEbook.passerPage(1)
maBibliothequeEbook.revenirPage(1)
maBibliothequeEbook.revenirPage(1)
maBibliothequeEbook.revenirPage(1)
maBibliothequeEbook.revenirPage(2)
maBibliothequeEbook.revenirPage(2)
maBibliothequeEbook.aller(1,900)