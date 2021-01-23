class CompteEpargne extends Compte {

    /**
     * constructeur du Compte Epargne qui hérite du constructeur de la classe Compte
     * 
     * @param {string} titulaire 
     * @param {number} montant 
     * @param {number} taux 
     * @param {number} rythme 
     */
    constructor(titulaire, montant = 50, taux = 0.005, rythme = 1) {
        super(titulaire, montant); // recuperation construteur classe mere
        this.taux = taux;
        this.rythme = rythme;

        /**
         * interets de 0.005 % toute les 1 millisecondes
         */
        setInterval(() => {
            this.solde *= 1 + this.taux;
        }, this.rythme)
    }

}