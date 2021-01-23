class Titulaire {

    /**
     * constructeur - permet d'instancier des titulaires 
     * @param {string} nom 
     * @param {string} prenom 
     */
    constructor(nom, prenom) {
        this.nom = nom; // varaible nom donnée par le titulaire
        this.prenom = prenom;

    }

    identite() {
        console.log(`le titulaire est ${this.prenom} ${this.nom}`); // template string 
    }

}