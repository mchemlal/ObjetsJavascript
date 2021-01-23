class CompteEpargne extends Compte {


    constructor(titulaire, montant = 50, taux = 0.005, rythme = 1) {
        super(titulaire, montant); // recuperation construteur classe mere
        this.taux = taux;
        this.rythme = rythme;

        /**
         * interets de 0.005 % 
         */
        setInterval(() => {
            this.solde *= 1 + this.taux;
        }, this.rythme)
    }







}