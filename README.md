# DIGITAL ELECTRONIQUE - Site E-commerce

Site vitrine complet pour une boutique d'électronique à Koudougou.

## 🚀 Fonctionnalités

### ✅ Pour les clients :
- Parcourir les produits avec filtres
- Voir les détails complets des produits
- Ajouter au panier (stockage local)
- Commander via WhatsApp automatique
- Contacter la boutique via formulaire
- Voir la localisation sur Google Maps
- Témoignages clients

### ✅ Pour l'administrateur :
- Tableau de bord (`admin.html`)
- Voir toutes les commandes
- Voir tous les messages
- Exporter les données
- Gérer les commandes

### ✅ Sans backend :
- 100% frontend
- Stockage dans le navigateur
- WhatsApp pour les commandes
- Pas de base de données nécessaire

## 📁 Structure des fichiers

Un exemple de Structure pour Backend

backend/
├── server.js                 # Point d'entrée
├── package.json              # Dépendances
├── .env                      # Variables d'environnement
├── models/
│   ├── Product.js            # Modèle Produit
│   ├── Order.js              # Modèle Commande
│   └── User.js               # Modèle Utilisateur (admin)
├── routes/
│   ├── products.js           # Routes produits
│   ├── orders.js             # Routes commandes
│   └── auth.js               # Routes authentification
├── controllers/
│   ├── productController.js
│   ├── orderController.js
│   └── authController.js
├── middleware/
│   └── auth.js               # Middleware d'authentification
└── config/
    └── db.js                 # Connexion MongoDB
