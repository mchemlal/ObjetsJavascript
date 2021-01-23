// let nomTitu = "john";
// let preTitu = "Doe";

// let soldeCompte = 100;

// soldeCompte += 50;

// créer un file js par objet : titulaire / compte

let titulaire1 = new Titulaire("Durand", "Pierre"); // instance Titulaire 1

console.log(titulaire1.nom); // accès à propri nom de l'objet

titulaire1.identite(); // appel de la fonction identité

let compte1 = new Compte(titulaire1, 25);
console.log(compte1);

compte1.crediter(200);
compte1.debiter(100);
console.log(compte1.solde); // nouveau solde suite à appel de la fonction "crediter"

compte1.afficherSolde(titulaire1.prenom, titulaire1.nom);

let compteEpargne1 = new CompteEpargne(titulaire1, 15);

compteEpargne1.crediter(100);
compteEpargne1.crediter(100);
compteEpargne1.crediter(100);
console.log(compteEpargne1);

compteEpargne1.debiter(50);
console.log(compteEpargne1);

compteEpargne1.afficherSolde(titulaire1.prenom, titulaire1.nom);