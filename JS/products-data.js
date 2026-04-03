// ===== DONNÉES DES PRODUITS =====
const productsData = [
    // ===== SMARTPHONES =====
    {
        id: 1,
        name: "Itel A60",
        category: "smartphone",
        brand: "itel",
        price: 175000,
        oldPrice: 230000,
        badge: "promo",
        rating: 4.5,
        sales: 2100,
        image: "images/5ba3efd6bc7ad0e6b8328be3b4fa5194.jpg",
        specs: {
            ram: "4GB",
            storage: "64GB",
            camera: "13MP + 2MP",
            battery: "5000mAh",
            screen: "6.6\" HD+"
        },
        description: "Smartphone équilibré avec une autonomie exceptionnelle et des performances fluides pour un usage quotidien.",
        details: {
            performance: {
                'Processeur': 'Octa-core 1.6GHz',
                'RAM': '4GB LPDDR4',
                'Stockage': '64GB (extensible à 256GB)',
                'Système': 'Android 13 Go Edition'
            },
            camera: {
                'Arrière': 'Double 13MP + 2MP (bokeh)',
                'Frontale': '8MP avec flash LED',
                'Vidéo': '1080p à 30fps',
                'Modes': 'Portrait, Nuit, HDR'
            },
            display: {
                'Taille': '6.6 pouces',
                'Résolution': 'HD+ (720x1600)',
                'Type': 'LCD à goutte d\'eau',
                'Protection': 'Verre trempé inclus'
            },
            battery: {
                'Capacité': '5000mAh',
                'Autonomie': '2 jours (usage normal)',
                'Charge': 'Rapide 10W',
                'Réseaux': '4G LTE, Dual SIM'
            },
            box: {
                'Contenu': 'Smartphone, chargeur rapide, câble USB-C, écouteurs, étui, verre trempé, documentation'
            }
        },
        warranty: [
            'Garantie 12 mois pièces et main d\'œuvre',
            'Échange sous 7 jours en cas de défaut',
            'Support technique gratuit',
            'Livraison gratuite à Koudougou'
        ],
        recommendedFor: ['Étudiants', 'Usage quotidien', 'Personnes âgées', 'Premier smartphone']
    },
    
    {
        id: 2,
        name: "Tecno Spark 7",
        category: "smartphone",
        brand: "tecno",
        price: 125000,
        oldPrice: 165000,
        badge: "promo",
        rating: 4.0,
        sales: 950,
        image: "images/Tecno-Spark-7-Image-3.jpg",
        specs: {
            ram: "4GB",
            storage: "64GB",
            camera: "16MP + 2MP",
            battery: "6000mAh",
            screen: "6.5\" HD+"
        },
        description: "Autonomie record avec une batterie de 6000mAh, parfait pour les utilisateurs intensifs.",
        details: {
            performance: {
                'Processeur': 'Octa-core 2.0GHz',
                'RAM': '4GB DDR4',
                'Stockage': '64GB (extensible à 256GB)',
                'Système': 'Android 11 (HiOS)'
            },
            camera: {
                'Arrière': 'Double 16MP + 2MP (profondeur)',
                'Frontale': '8MP avec éclairage LED',
                'Vidéo': '1080p à 30fps',
                'Fonctions': 'Mode nuit, IA Scene Detection'
            },
            display: {
                'Taille': '6.5 pouces',
                'Résolution': 'HD+ (720x1600)',
                'Rafraîchissement': '60Hz',
                'Rapport écran': '90%'
            },
            battery: {
                'Capacité': '6000mAh',
                'Autonomie': '3 jours (usage normal)',
                'Charge': '18W fast charging',
                'Réseaux': '4G LTE, Dual SIM + microSD'
            }
        },
        warranty: [
            'Garantie 12 mois',
            'Assistance technique gratuite',
            'Échange sous 15 jours'
        ]
    },
    
    {
        id: 3,
        name: "Samsung Galaxy A14",
        category: "smartphone",
        brand: "samsung",
        price: 185000,
        oldPrice: null,
        badge: "new",
        rating: 4.3,
        sales: 1500,
        image: "images/81L701E6piL._AC_SL1500_.jpg",
        specs: {
            ram: "6GB",
            storage: "128GB",
            camera: "50MP + 5MP + 2MP",
            battery: "5000mAh",
            screen: "6.6\" FHD+"
        },
        description: "Triple caméra 50MP pour des photos professionnelles, écran FHD+ immersif.",
        details: {
            performance: {
                'Processeur': 'Exynos 850 Octa-core',
                'RAM': '6GB LPDDR4X',
                'Stockage': '128GB UFS 2.2',
                'Système': 'Android 13 avec One UI'
            },
            camera: {
                'Principal': '50MP (f/1.8)',
                'Ultra-wide': '5MP (f/2.2)',
                'Macro': '2MP (f/2.4)',
                'Frontale': '13MP (f/2.0)'
            },
            display: {
                'Taille': '6.6 pouces',
                'Résolution': 'FHD+ (1080x2400)',
                'Type': 'PLS LCD',
                'Rafraîchissement': '90Hz'
            },
            features: {
                'Sécurité': 'Empreinte digitale latérale',
                'Connectivité': '5G, WiFi 5, Bluetooth 5.2',
                'Audio': 'Haut-parleur stéréo, prise jack 3.5mm'
            }
        }
    },
    
    {
        id: 4,
        name: "iPhone 14 Pro",
        category: "smartphone",
        brand: "iphone",
        price: 750000,
        oldPrice: null,
        badge: "premium",
        rating: 4.9,
        sales: 350,
        image: "images/iphone-14-pro-max-1.jpg",
        specs: {
            ram: "6GB",
            storage: "256GB",
            camera: "48MP + 12MP + 12MP",
            battery: "3200mAh",
            screen: "6.1\" Super Retina XDR"
        },
        description: "Le flagship d'Apple avec le Dynamic Island, puce A16 Bionic et caméra 48MP.",
        details: {
            performance: {
                'Processeur': 'A16 Bionic 4nm',
                'RAM': '6GB',
                'Stockage': '256GB NVMe',
                'Système': 'iOS 16'
            },
            camera: {
                'Principal': '48MP (f/1.78)',
                'Ultra-wide': '12MP (f/2.2)',
                'Téléobjectif': '12MP 3x (f/2.8)',
                'Frontale': '12MP TrueDepth'
            },
            display: {
                'Taille': '6.1 pouces',
                'Technologie': 'Super Retina XDR OLED',
                'Résolution': '2556x1179',
                'Luminosité': '2000 nits (pic)'
            },
            special: {
                'Dynamic Island': 'Nouvelle interface interactive',
                'Always-On Display': 'Écran toujours actif',
                'Durabilité': 'Ceramic Shield, IP68'
            }
        }
    },
    
    // ===== ORDINATEURS =====
    {
        id: 5,
        name: "HP ZBOOK",
        category: "ordinateur",
        brand: "hp",
        price: 520000,
        oldPrice: 650000,
        badge: "promo",
        rating: 4.7,
        sales: 120,
        image: "images/ZBook-8-og-image.avif",
        specs: {
            processor: "Intel Core i7",
            ram: "16GB",
            storage: "512GB SSD",
            screen: "15.6\" FHD"
        },
        description: "Station de travail mobile professionnelle pour les créateurs et ingénieurs.",
        details: {
            performance: {
                'Processeur': 'Intel Core i7-11800H (8 cœurs, 4.6GHz)',
                'RAM': '16GB DDR4 3200MHz',
                'Stockage': '512GB SSD NVMe',
                'Graphique': 'NVIDIA Quadro T1200 4GB'
            },
            display: {
                'Taille': '15.6 pouces',
                'Résolution': 'Full HD IPS (1920x1080)',
                'Couleurs': '100% sRGB',
                'Luminosité': '300 nits'
            },
            connectivity: {
                'Ports': '2x Thunderbolt 4, 2x USB 3.2, HDMI, SD card',
                'WiFi': 'WiFi 6E (802.11ax)',
                'Bluetooth': '5.2',
                'Webcam': '720p avec obturateur privacité'
            },
            build: {
                'Matériau': 'Magnésium et aluminium',
                'Poids': '1.8kg',
                'Batterie': '83Wh (autonomie 10h)',
                'Garantie': '3 ans International'
            }
        },
        recommendedFor: ['Professionnels', 'Ingénieurs', 'Designers', 'Développeurs']
    },
    
    {
        id: 6,
        name: "Lenovo ThinkPad",
        category: "ordinateur",
        brand: "lenovo",
        price: 420000,
        oldPrice: null,
        badge: null,
        rating: 4.5,
        sales: 300,
        image: "images/lenovo_20ta002cus_thinkpad_e14_g2_i5_1135_1605842.jpg",
        specs: {
            processor: "Intel Core i5",
            ram: "8GB",
            storage: "512GB SSD",
            screen: "14\" FHD"
        },
        description: "Robuste et fiable, le ThinkPad est le choix des professionnels en déplacement.",
        details: {
            performance: {
                'Processeur': 'Intel Core i5-1135G7 (4 cœurs, 4.2GHz)',
                'RAM': '8GB DDR4 (extensible à 32GB)',
                'Stockage': '512GB SSD PCIe',
                'Graphique': 'Intel Iris Xe'
            },
            durability: {
                'Test Mil-Spec': 'Passé 12 tests militaires',
                'Clavier': 'Spill-resistant, rétroéclairé',
                'TrackPoint': 'Point rouge traditionnel',
                'Hinge': '180 degrés'
            },
            security: {
                'Authentification': 'Empreinte + reconnaissance faciale',
                'Chip TPM': '2.0 pour chiffrement',
                'Privacy Guard': 'Protection visuelle',
                'Docking': 'Port propriétaire'
            }
        }
    },
    
    {
        id: 7,
        name: "ASUS VivoBook",
        category: "ordinateur",
        brand: "asus",
        price: 375000,
        oldPrice: null,
        badge: null,
        rating: 4.2,
        sales: 450,
        image: "images/3-20-e1662987253972.jpg",
        specs: {
            processor: "Intel Core i5",
            ram: "8GB",
            storage: "256GB SSD",
            screen: "14\" HD"
        },
        description: "Design élégant et performances équilibrées pour les étudiants et professionnels.",
        details: {
            design: {
                'Épaisseur': '17.9mm',
                'Poids': '1.4kg',
                'Couleurs': 'Slate Grey, Peacock Blue',
                'Bordures': 'NanoEdge 88% screen-to-body'
            },
            performance: {
                'Processeur': 'Intel Core i5-1135G7',
                'RAM': '8GB DDR4 on board',
                'Stockage': '256GB SSD M.2 NVMe',
                'Graphique': 'Intel UHD Graphics'
            },
            features: {
                'Clavier': 'Backlit, NumberPad intégré',
                'Audio': 'SonicMaster avec AI noise cancellation',
                'Batterie': '42Wh, fast charge 60% en 49min'
            }
        }
    },
    
    {
        id: 8,
        name: "Dell Inspiron",
        category: "ordinateur",
        brand: "dell",
        price: 320000,
        oldPrice: 380000,
        badge: "promo",
        rating: 4.3,
        sales: 280,
        image: "images/5-scaled-e1683020891438.jpg",
        specs: {
            processor: "Intel Core i3",
            ram: "8GB",
            storage: "256GB SSD",
            screen: "15.6\" FHD"
        },
        description: "PC portable polyvalent pour la famille, équilibre parfait prix/performances.",
        details: {
            performance: {
                'Processeur': 'Intel Core i3-1115G4 (2 cœurs, 4.1GHz)',
                'RAM': '8GB DDR4 2666MHz',
                'Stockage': '256GB SSD',
                'Graphique': 'Intel UHD Graphics'
            },
            multimedia: {
                'Audio': 'Waves MaxxAudio Pro',
                'Webcam': 'HD 720p avec microphone numérique',
                'Connectivité': 'WiFi 6, Bluetooth 5.1'
            },
            ports: {
                'USB': '2x USB 3.2, 1x USB 2.0',
                'Vidéo': 'HDMI 1.4',
                'Réseau': 'RJ-45 Gigabit Ethernet',
                'Carte SD': 'Lecteur intégré'
            }
        }
    },
    
    // ===== PIÈCES DÉTACHÉES =====
    {
        id: 9,
        name: "RAM 8GB DDR4",
        category: "piece",
        brand: "kingston",
        price: 25000,
        oldPrice: null,
        badge: null,
        rating: 4.8,
        sales: 890,
        image: "images/61FsaYbk3UL._AC_.jpg",
        specs: {
            type: "DDR4",
            speed: "3200MHz",
            capacity: "8GB",
            latency: "CL16"
        },
        description: "Mémoire RAM performante pour améliorer la réactivité de votre ordinateur.",
        details: {
            technical: {
                'Type': 'DDR4 3200MHz',
                'Compatibilité': 'Intel 400/500/600 series, AMD AM4',
                'Tension': '1.35V',
                'Timings': 'CL16-18-18-38',
                'Radiateur': 'Aluminium dissipateur thermique'
            },
            benefits: [
                'Augmente la réactivité du système',
                'Réduction des temps de chargement',
                'Support multi-tâches amélioré',
                'Garantie à vie du fabricant'
            ]
        },
        installation: {
            included: true,
            price: 'Gratuite',
            time: '30 minutes',
            includes: ['Diagnostic gratuit', 'Test de stabilité', 'Nettoyage interne']
        }
    },
    
    {
        id: 10,
        name: "SSD 500GB",
        category: "piece",
        brand: "samsung",
        price: 45000,
        oldPrice: 55000,
        badge: "promo",
        rating: 4.9,
        sales: 650,
        image: "images/Png.png",
        specs: {
            type: "NVMe",
            capacity: "500GB",
            speed: "3500MB/s",
            interface: "M.2"
        },
        description: "Disque SSD NVMe ultra-rapide pour des temps de chargement instantanés.",
        details: {
            performance: {
                'Lecture séquentielle': '3500 MB/s',
                'Écriture séquentielle': '3000 MB/s',
                'IOPS aléatoire': '500K/480K',
                'Contrôleur': 'Samsung Phoenix'
            },
            reliability: {
                'MTBF': '1.5 million d\'heures',
                'TBW': '300 TB écrits',
                'Garantie': '5 ans',
                'Technologie': 'V-NAND 3-bit MLC'
            },
            features: {
                'Gestion thermique': 'Dynamic Thermal Guard',
                'Chiffrement': 'AES 256-bit',
                'Logiciel inclus': 'Samsung Magician'
            }
        }
    },
    
    {
        id: 11,
        name: "Batterie Laptop",
        category: "piece",
        brand: "generic",
        price: 18000,
        oldPrice: null,
        badge: null,
        rating: 4.2,
        sales: 420,
        image: "images/61R4z9MKH9L._AC_.jpg",
        specs: {
            capacity: "4400mAh",
            voltage: "11.1V",
            cells: "6",
            compatibility: "HP/Dell/Lenovo"
        },
        description: "Batterie de remplacement compatible avec la plupart des modèles de PC portables.",
        details: {
            specifications: {
                'Capacité': '4400mAh / 48Wh',
                'Tension': '11.1V',
                'Cellules': '6 cellules Li-ion',
                'Cycle de vie': '500 cycles (80% capacité)'
            },
            compatibility: [
                'HP Pavilion, EliteBook, ProBook',
                'Dell Inspiron, Latitude, Vostro',
                'Lenovo ThinkPad, IdeaPad',
                'ASUS, Acer, Toshiba'
            ],
            safety: {
                'Protections': 'Surcharge, décharge profonde, court-circuit',
                'Certifications': 'CE, RoHS, UN38.3',
                'Garantie': '12 mois'
            }
        }
    },
    
    {
        id: 12,
        name: "Chargeur USB-C",
        category: "piece",
        brand: "anker",
        price: 8000,
        oldPrice: 12000,
        badge: "promo",
        rating: 4.6,
        sales: 1200,
        image: "images/61lNR+1HsyL._AC_.jpg",
        specs: {
            power: "65W",
            ports: "2x USB-C + 1x USB-A",
            cable: "Inclus",
            compatibility: "MacBook/Dell/Lenovo"
        },
        description: "Chargeur GaN compact 65W pour ordinateurs portables et appareils mobiles.",
        details: {
            charging: {
                'Puissance max': '65W',
                'Ports': '2x USB-C PD, 1x USB-A QC3.0',
                'Technologie': 'GaN (Gallium Nitride)',
                'Dimensions': '68x68x31mm'
            },
            compatibility: {
                'Laptops': 'MacBook Pro/Air, Dell XPS, Lenovo',
                'Phones': 'iPhone, Samsung, Google Pixel',
                'Tablets': 'iPad Pro, Samsung Tab',
                'Accessories': 'AirPods, Smartwatches'
            },
            features: {
                'Compact': '40% plus petit que les chargeurs standards',
                'Efficace': 'Efficacité énergétique 94%',
                'Sécuritaire': 'MultiProtect safety system'
            }
        }
    }
];

// Fonction pour formater le prix
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', { 
        minimumFractionDigits: 0,
        maximumFractionDigits: 0 
    }).format(price) + ' FCFA';
}

// Fonction pour générer les étoiles de notation
function generateRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

// Fonction pour obtenir l'icône de badge
function getBadgeClass(badge) {
    switch(badge) {
        case 'promo': return 'badge-promo';
        case 'new': return 'badge-new';
        case 'premium': return 'badge-premium';
        default: return '';
    }
}

// Fonction pour obtenir le texte du badge
function getBadgeText(badge) {
    switch(badge) {
        case 'promo': return 'Promo';
        case 'new': return 'Nouveau';
        case 'premium': return 'Premium';
        default: return '';
    }
}

// Fonction pour obtenir l'icône de catégorie
function getCategoryIcon(category) {
    switch(category) {
        case 'smartphone': return 'fas fa-mobile-alt';
        case 'ordinateur': return 'fas fa-laptop';
        case 'piece': return 'fas fa-microchip';
        default: return 'fas fa-box';
    }
}

// Fonction pour traduire la catégorie
function translateCategory(category) {
    switch(category) {
        case 'smartphone': return 'Smartphone';
        case 'ordinateur': return 'Ordinateur';
        case 'piece': return 'Pièce Détachée';
        default: return category;
    }
}