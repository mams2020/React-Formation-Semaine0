// exo1
const personne = { nom: "Diallo", prenom: "Mahmoud", ville: "Dakar" };
const { nom, prenom, ville } = personne;
console.log(`nom: ${nom}, prenom: ${prenom} ville: ${ville}`);

// exo2
const voiture = { marque: "Range", modele: "R050", annee: 2011 };
const anneeRestante = { ...voiture, annee: 2012 };
console.log(anneeRestante);

// exo3
const afficherCoordonnees = (x, y) => x + y;
console.log(afficherCoordonnees(2, 5));

// exo4
const utilisateur = {
  adresse: {
    rue: 22,
    codePostal: 1000,
  },
};

const { rue, codePostal } = utilisateur.adresse;
console.log(`Rue : ${rue}, Code Postal :  ${codePostal}`);

// exo 5
const user = {};
const { pays = "france" } = user;
console.log("Pays :", pays);

// phase 2
// exo6 et exo 7
const fruits = ["pomme", "banane", "orange"];
// const [firts, second] = fruits;
// console.log(firts, second);

const [firts, , third] = fruits;
console.log(firts, third);

// exo8
const nombres = [10, 20, 30, 40, 50];
const [premier] = nombres;
const [, ...rest] = nombres;
console.log(premier);
console.log(rest);

// exo9
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b);

// exo10
const premierEtDernier = (tableau) => {
  const [premier] = tableau;
  const dernier = tableau.slice(-1)[0];
  return `le premier élément est ${premier} et le dernier ${dernier}`;
};

console.log(premierEtDernier([1, 2, 3, 4]));

// Partie 3 : spread operator
// exo 11
const ancienTableau = [1, 2, 3];
const nouveauTableau = [...ancienTableau, 4, 5];
console.log(nouveauTableau);

// exo12
const ancienObjet = { a: 1, b: 2 };
const nouveauObjet = { ...ancienObjet, b: 99 };
console.log(ancienObjet);
console.log(nouveauObjet);

// exo13
const tab1 = ["a", "b"];
const tab2 = ["c", "d"];
const fusion = [...tab1, ...tab2];
console.log(fusion);

// exo14
const obj1 = { nom: "Diallo" };
const obj2 = { age: 29 };
const personneComplete = { ...obj1, ...obj2 };
console.log(personneComplete);

// exo15
const membres = [
  {
    nom: "SY",
    ville: "Mbour",
    Sexe: "M",
  },
];
const copieMembres = { ...membres[0], nom: "KA", ville: "Mbour", Sexe: "F" };
console.log(membres[0]);
console.log(copieMembres);

// Fonctions flechées
// exo16
const somme = (a, b) => a + b;
console.log(somme(10, 4));

// exo17
const square = (x) => x * x;

// exo18
const estPair = (n) => (n % 2 == 0 ? "pair" : "impair");
console.log(estPair(3));
console.log(estPair(4));

// exo19
const numbers = [1, 2, 3, 4];
const multiplierPar3 = numbers.map((n) => 3 * n);
console.log(multiplierPar3);

// exo20
const tableauNombres = [12, 5, 8, 130, 44];
const estSupA10 = tableauNombres.filter((n) => n >= 10);
console.log(estSupA10);

// DEFI GENERAL
const transformeEquipe = ({ membres }) => {
  const membresCopie = [...membres];
  const nouveauTab = membresCopie
    .filter((membre) => membre.length > 3)
    .map((membre) => membre.toUpperCase());

  return nouveauTab;
};

// exemple d'utilisation
console.log(transformeEquipe({ membres: ["Diallo", "KA", "Sy", "Ba"] }));
