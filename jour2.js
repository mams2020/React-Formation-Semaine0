// --- EXERCICE 1 : Augmenter l'âge sans muter ---
const augmenterAge = ({ nom, age }) => {
  // On crée un nouvel objet avec le spread
  const nouvellePersonne = { nom, age: age + 1 };
  return nouvellePersonne;
};

// --- EXERCICE 2 : Filtrer et doubler les pairs ---
const doublerPairs = (tableau) => {
  // On filtre les pairs, puis on les double
  const resultat = tableau.filter((n) => n % 2 === 0).map((n) => n * 2);
  return resultat;
};

// --- EXERCICE 3 : Extraction profonde avec valeur par défaut ---
const extraireVille = ({ adresse: { ville = "Inconnue" } = {} }) => {
  // Si adresse ou ville n'existent pas, on retourne "Inconnue"
  return ville;
};

// --- DÉFI DU GÉNÉRAL ---
const equipe = [
  { nom: "Diallo", age: 29 },
  { nom: "Diop", age: 19 },
  { nom: "Sarr", age: 22 },
];

const analyserEquipe = (equipe) => {
  return equipe
    .filter((joueur) => joueur.age > 25)
    .map((joueur) => ({
      ...joueur,
      nom: joueur.nom.toUpperCase(),
    }))
    .sort((a, b) => a.age - b.age);
};

// --- TESTS ---
console.log("--- Exercice 1 ---");
console.log(augmenterAge({ nom: "Diallo", age: 30 }));
// Résultat attendu : { nom: "Diallo", age: 31 }

console.log("--- Exercice 2 ---");
console.log(doublerPairs([1, 2, 3, 4, 5, 6]));
// Résultat attendu : [4, 8, 12]

console.log("--- Exercice 3 ---");
console.log(extraireVille({ adresse: { ville: "Dakar" } }));
// Résultat attendu : "Dakar"
console.log(extraireVille({ nom: "Diop" }));
// Résultat attendu : "Inconnue"

console.log("--- Défi ---");
console.log(analyserEquipe(equipe));
// Résultat attendu : [ { nom: "SARR", age: 22 }, { nom: "DIALLO", age: 29 } ] ?
// Attention ! Votre filtre >25 exclut Sarr (22 ans). Résultat : [ { nom: "DIALLO", age: 29 } ]
console.log("Equipe originale (inchangée) :", equipe);
