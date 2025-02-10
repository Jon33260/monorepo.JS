import type { RequestHandler } from "express";

// Données pour simuler la réponse (si la base de données est vide)
const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Action pour lister toutes les catégories
const browse: RequestHandler = (req, res) => {
  res.json(categories);
};

// Action pour lire une catégorie spécifique
const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const categorie = categories.find((p) => p.id === parsedId);

  if (categorie != null) {
    res.json(categorie);
  } else {
    res.sendStatus(404);
  }
};

// Export des actions pour les importer dans d'autres fichiers
export default { browse, read };
