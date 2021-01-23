class Compte {

    /**
     * constructeur -> instancier des comptes 
     * @param {string} titulaire // définir le type 
     * @param {integer} montant 
     */
    constructor(titulaire, montant = 0) { // valeur par défaut à ouverture du compte
        this.titulaire = titulaire;
        this.solde = montant;

    }

    /**
     * fonction créditer sur compte
     * @param {number} montant 
     */
    crediter(montant) {
        this.solde += montant;
        return this.solde;
    }

    debiter(montant) {
        this.solde -= montant;
        return this.solde;
    }

    afficherSolde(titulairePrenom, titulaireNom) {

        console.log(`le titulaire est ${titulairePrenom} ${titulaireNom} et le compte présente un solde de ${this.solde}`);
    }
}