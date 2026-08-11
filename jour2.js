// exo1
const augmenterAge = ({ nom, age }) => {
  const objetCopie = { ...{ nom, age } };
  const newObjet = { ...objetCopie, age: age + 2 };
  return newObjet;
};

// exo2
const doublerPairs = (tableau) => {
  const nouveauTableau = tableau.filter((n) => n % 2 == 0).map((n) => n * 2);

  return nouveauTableau;
};

// exo3
const extraireVille = ({ nom, adresse: { ville = "Inconnue" } = {} }) => ville;

// DEFI GENERAL
const equipe = [
  { nom: "Diallo", age: 29 },
  { nom: "Diop", age: 19 },
  { nom: "Sarr", age: 22 },
];
const analyserEquipe = (equipe) => {
  return equipe
    .filter((joueur) => joueur.age > 25)
    .map((joueur) => ({ ...joueur, nom: joueur.nom.toUpperCase() }))
    .sort((a, b) => a.age - b.age);
};

// --- TESTS ---
console.log("--- Exercice 1 ---");
console.log(augmenterAge({ nom: "Diallo", age: 30 }));

console.log("--- Exercice 2 ---");
console.log(doublerPairs([1, 2, 3, 4, 5, 6]));

console.log("--- Exercice 3 ---");
console.log(extraireVille({ adresse: { ville: "Dakar" } }));
console.log(extraireVille({ nom: "Diop" }));

console.log("--- Défi ---");
console.log(analyserEquipe(equipe));
console.log("Equipe originale (inchangée) :", equipe);
