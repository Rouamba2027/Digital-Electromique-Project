// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Année courante pour le footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Initialiser les produits
    displayProducts(productsData);
    
    // Initialiser les événements
    initEventListeners();
    
    // Initialiser la recherche
    initSearch();
    
    // Initialiser le panier
    loadCart();
    
    // Initialiser le formulaire de contact
    initContactForm();
});

// ===== GESTION DES BOUTONS =====
function initEventListeners() {
    // Menu toggle (mobile)
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const icon = this.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Fermer le menu au clic sur un lien
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
            mainNav.classList.remove('active');
            if (menuToggle) {
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
    
    // BOUTON WHATSAPP HEADER
    const whatsappBtn = document.getElementById('whatsappBtn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            window.open('https://wa.me/22656304288?text=Bonjour%2C%20je%20souhaite%20commander%20un%20produit', '_blank');
        });
    }
    
    // BOUTON PANIER
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            viewCart();
        });
    }
    
    // BOUTON RECHERCHE (dans hero)
    const searchBtn = document.querySelector('.search-bar button');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            searchProducts();
        });
    }
    
    // FILTRES PRODUITS
    initProductFilters();
    
    // BOUTON RÉINITIALISER FILTRES
    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetAllFilters);
    }
    
    // BOUTON ANNULER COMMANDE
    const cancelPurchase = document.getElementById('cancelPurchase');
    if (cancelPurchase) {
        cancelPurchase.addEventListener('click', function() {
            document.getElementById('purchaseModal').style.display = 'none';
        });
    }
    
    // FERMETURE DES MODALS
    initModals();
}

// ===== GESTION DES MODALS =====
function initModals() {
    // Fermeture avec le X du modal achat
    const closeModal = document.getElementById('closeModal');
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            document.getElementById('purchaseModal').style.display = 'none';
        });
    }
    
    // Fermeture avec le X du modal détails
    const closeDetails = document.getElementById('closeDetails');
    if (closeDetails) {
        closeDetails.addEventListener('click', function() {
            document.getElementById('detailsModal').style.display = 'none';
        });
    }
    
    // Fermeture en cliquant en dehors
    window.addEventListener('click', function(e) {
        const purchaseModal = document.getElementById('purchaseModal');
        const detailsModal = document.getElementById('detailsModal');
        
        if (e.target === purchaseModal) {
            purchaseModal.style.display = 'none';
        }
        if (e.target === detailsModal) {
            detailsModal.style.display = 'none';
        }
    });
}

// ===== FILTRES PRODUITS =====
function initProductFilters() {
    // Filtres par catégorie
    document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
        btn.addEventListener('click', function() {
            // Active/désactive les boutons
            document.querySelectorAll('.filter-btn[data-filter]').forEach(b => 
                b.classList.remove('active')
            );
            this.classList.add('active');
            
            // Applique le filtre
            filterProducts();
        });
    });
    
    // Filtres selects
    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter) {
        priceFilter.addEventListener('change', filterProducts);
    }
    
    const brandFilter = document.getElementById('brandFilter');
    if (brandFilter) {
        brandFilter.addEventListener('change', filterProducts);
    }
}

function filterProducts() {
    const categoryFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
    const priceFilter = document.getElementById('priceFilter')?.value || 'all';
    const brandFilter = document.getElementById('brandFilter')?.value || 'all';
    
    let filtered = [...productsData];
    
    // Filtre par catégorie
    if (categoryFilter !== 'all') {
        filtered = filtered.filter(p => p.category === categoryFilter);
    }
    
    // Filtre par marque
    if (brandFilter !== 'all') {
        filtered = filtered.filter(p => p.brand === brandFilter);
    }
    
    // Filtre par prix
    if (priceFilter !== 'all') {
        filtered = filtered.filter(p => {
            const price = p.price;
            if (priceFilter === '0-50000') return price <= 50000;
            if (priceFilter === '50000-150000') return price > 50000 && price <= 150000;
            if (priceFilter === '150000-300000') return price > 150000 && price <= 300000;
            if (priceFilter === '300000+') return price > 300000;
            return true;
        });
    }
    
    displayProducts(filtered);
}

function resetAllFilters() {
    // Réinitialiser les boutons de catégorie
    document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
        if (btn.dataset.filter === 'all') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Réinitialiser les selects
    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter) priceFilter.value = 'all';
    
    const brandFilter = document.getElementById('brandFilter');
    if (brandFilter) brandFilter.value = 'all';
    
    // Afficher tous les produits
    displayProducts(productsData);
    
    showNotification('🔄 Filtres réinitialisés', 'info');
}

// ===== AFFICHAGE DES PRODUITS =====
function displayProducts(products) {
    const container = document.getElementById('productsContainer');
    if (!container) return;
    
    if (!products || products.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 50px;">
                <i class="fas fa-box-open" style="font-size: 4rem; color: var(--gray); margin-bottom: 20px;"></i>
                <h3 style="color: var(--gray);">Aucun produit trouvé</h3>
                <p>Essayez de modifier vos filtres.</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    products.forEach(product => {
        const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
        
        html += `
            <div class="product-card" data-id="${product.id}">
                ${product.badge ? `<span class="product-badge ${getBadgeClass(product.badge)}">${getBadgeText(product.badge)}</span>` : ''}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-content">
                    <h3>${product.name}</h3>
                    <div class="product-specs">
                        ${product.specs?.ram ? `<span><i class="fas fa-microchip"></i> ${product.specs.ram}</span>` : ''}
                        ${product.specs?.storage ? `<span><i class="fas fa-database"></i> ${product.specs.storage}</span>` : ''}
                        ${product.specs?.camera ? `<span><i class="fas fa-camera"></i> ${product.specs.camera}</span>` : ''}
                        ${product.specs?.battery ? `<span><i class="fas fa-battery-full"></i> ${product.specs.battery}</span>` : ''}
                        ${product.specs?.screen ? `<span><i class="fas fa-mobile-alt"></i> ${product.specs.screen}</span>` : ''}
                        ${product.specs?.processor ? `<span><i class="fas fa-cpu"></i> ${product.specs.processor}</span>` : ''}
                        ${product.specs?.type ? `<span><i class="fas fa-microchip"></i> ${product.specs.type}</span>` : ''}
                        ${product.specs?.capacity ? `<span><i class="fas fa-database"></i> ${product.specs.capacity}</span>` : ''}
                        ${product.specs?.speed ? `<span><i class="fas fa-tachometer-alt"></i> ${product.specs.speed}</span>` : ''}
                        ${product.specs?.power ? `<span><i class="fas fa-bolt"></i> ${product.specs.power}</span>` : ''}
                    </div>
                    <div class="product-rating">
                        ${generateRatingStars(product.rating)}
                        <span>(${product.sales} vendus)</span>
                    </div>
                    <div class="product-price">
                        ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                        <span class="current-price">${formatPrice(product.price)}</span>
                        ${discount > 0 ? `<span class="savings">Économisez ${discount}%</span>` : ''}
                    </div>
                    <div class="product-actions">
                        <button onclick="addToCart(${product.id}, '${product.name.replace(/'/g, "\\'")}', ${product.price})" class="btn btn-buy">
                            <i class="fas fa-cart-plus"></i> Ajouter au panier
                        </button>
                        <button onclick="openDetailsModal(${product.id})" class="btn btn-details">
                            <i class="fas fa-info-circle"></i> Détails
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ===== FONCTIONS POUR LES PRODUITS =====
function openDetailsModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('detailsModal');
    const title = document.getElementById('detailsTitle');
    const content = document.getElementById('detailsContent');
    
    title.textContent = product.name;
    
    let detailsHtml = `
        <div class="details-content">
            <div class="details-header">
                <div class="product-main-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-summary">
                    <h3>${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price-details">
                        <span class="current-price" style="font-size: 2rem;">${formatPrice(product.price)}</span>
                        ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                        ${product.badge ? `<span class="promo-badge">${getBadgeText(product.badge)}</span>` : ''}
                    </div>
                    <div class="product-rating">
                        ${generateRatingStars(product.rating)}
                        <span>${product.rating}/5 (${product.sales} avis)</span>
                    </div>
                </div>
            </div>
    `;
    
    // Spécifications détaillées
    if (product.details) {
        detailsHtml += `<div class="specifications-detailed">`;
        
        Object.entries(product.details).forEach(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
                detailsHtml += `
                    <div class="specs-category">
                        <h4><i class="fas fa-${getIconForCategory(key)}"></i> ${capitalizeFirstLetter(key)}</h4>
                        <ul>
                `;
                
                Object.entries(value).forEach(([subKey, subValue]) => {
                    detailsHtml += `<li><strong>${subKey}:</strong> ${subValue}</li>`;
                });
                
                detailsHtml += `</ul></div>`;
            }
        });
        
        detailsHtml += `</div>`;
    }
    
    // Garantie
    if (product.warranty) {
        detailsHtml += `
            <div class="warranty-section">
                <h4><i class="fas fa-shield-alt"></i> Garantie</h4>
                <div class="warranty-list">
                    ${product.warranty.map(w => `
                        <div class="warranty-item">
                            <i class="fas fa-check-circle"></i>
                            <span>${w}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Recommandé pour
    if (product.recommendedFor) {
        detailsHtml += `
            <div class="recommended-section">
                <h4><i class="fas fa-users"></i> Recommandé pour</h4>
                <div class="tags-container">
                    ${product.recommendedFor.map(r => `<span class="tag">${r}</span>`).join('')}
                </div>
            </div>
        `;
    }
    
    // Installation
    if (product.installation) {
        detailsHtml += `
            <div class="installation-section">
                <h4><i class="fas fa-tools"></i> Installation</h4>
                <p><strong>Incluse:</strong> ${product.installation.included ? 'Oui' : 'Non'}</p>
                ${product.installation.price ? `<p><strong>Prix:</strong> ${product.installation.price}</p>` : ''}
                ${product.installation.time ? `<p><strong>Temps:</strong> ${product.installation.time}</p>` : ''}
            </div>
        `;
    }
    
    // Boutons d'action
    detailsHtml += `
            <div class="modal-actions" style="margin-top: 30px;">
                <button onclick="addToCart(${product.id}, '${product.name.replace(/'/g, "\\'")}', ${product.price}); document.getElementById('detailsModal').style.display='none';" class="btn btn-buy" style="flex: 2;">
                    <i class="fas fa-cart-plus"></i> Ajouter au panier
                </button>
                <button onclick="document.getElementById('detailsModal').style.display='none'" class="btn btn-secondary">
                    Fermer
                </button>
            </div>
        </div>
    `;
    
    content.innerHTML = detailsHtml;
    modal.style.display = 'flex';
}

function getIconForCategory(category) {
    const icons = {
        performance: 'microchip',
        camera: 'camera',
        display: 'mobile-alt',
        battery: 'battery-full',
        design: 'paint-brush',
        connectivity: 'network-wired',
        security: 'lock',
        build: 'hammer',
        durability: 'shield-alt',
        features: 'star',
        technical: 'cogs',
        reliability: 'check-circle',
        charging: 'bolt',
        compatibility: 'plug',
        specifications: 'list',
        box: 'box',
        multimedia: 'film',
        ports: 'plug',
        special: 'star'
    };
    return icons[category] || 'circle';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// ===== GESTION DU PANIER =====
let cart = [];

// Charger le panier au démarrage
function loadCart() {
    const savedCart = localStorage.getItem('digital_cart');
    cart = savedCart ? JSON.parse(savedCart) : [];
    updateCartCount();
}

// Sauvegarder le panier
function saveCart() {
    localStorage.setItem('digital_cart', JSON.stringify(cart));
    updateCartCount();
}

// Mettre à jour le compteur
function updateCartCount() {
    const countElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    countElements.forEach(el => {
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? 'flex' : 'none';
        
        // Animation
        el.classList.add('updating');
        setTimeout(() => el.classList.remove('updating'), 300);
    });
}

// Ajouter au panier (pas de formulaire !)
function addToCart(productId, productName, productPrice) {
    // Vérifier si le produit existe déjà dans le panier
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }
    
    saveCart();
    showAddToCartNotification(productName);
}

// Notification d'ajout au panier
function showAddToCartNotification(productName) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 15px; flex-wrap: wrap;">
            <span><i class="fas fa-check-circle" style="color: var(--success);"></i> <strong>${productName}</strong> ajouté au panier</span>
            <button onclick="viewCart()" style="background: var(--primary); color: white; border: none; border-radius: 5px; padding: 8px 15px; cursor: pointer; font-weight: bold;">
                Voir le panier 🛒
            </button>
        </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Voir le panier (ouvre le modal)
function viewCart() {
    displayCartModal();
}

// Afficher le modal du panier
function displayCartModal() {
    let modal = document.getElementById('cartModal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'cartModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 700px;">
                <div class="modal-header">
                    <h2><i class="fas fa-shopping-cart"></i> Votre Panier</h2>
                    <span class="close-modal" onclick="document.getElementById('cartModal').style.display='none'">&times;</span>
                </div>
                <div class="modal-body" id="cartModalBody">
                    <!-- Contenu dynamique -->
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    const body = document.getElementById('cartModalBody');
    
    if (cart.length === 0) {
        body.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <i class="fas fa-shopping-cart" style="font-size: 4rem; color: #ccc; margin-bottom: 20px;"></i>
                <p style="color: #666; font-size: 1.2rem;">Votre panier est vide</p>
                <button onclick="document.getElementById('cartModal').style.display='none'" class="btn btn-primary" style="margin-top: 20px;">
                    Continuer mes achats
                </button>
            </div>
        `;
    } else {
        let total = 0;
        let itemsHtml = '';
        
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            itemsHtml += `
                <div style="display: flex; align-items: center; gap: 15px; padding: 15px; border-bottom: 1px solid #eee;">
                    <div style="flex: 2;">
                        <strong>${item.name}</strong>
                    </div>
                    <div style="flex: 1; text-align: center;">
                        ${formatPrice(item.price)}
                    </div>
                    <div style="flex: 1; display: flex; align-items: center; gap: 5px; justify-content: center;">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" style="width: 30px; height: 30px; border: 1px solid #ddd; background: white; border-radius: 5px; cursor: pointer;">-</button>
                        <span style="min-width: 30px; text-align: center;">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" style="width: 30px; height: 30px; border: 1px solid #ddd; background: white; border-radius: 5px; cursor: pointer;">+</button>
                    </div>
                    <div style="flex: 1; text-align: right; font-weight: bold;">
                        ${formatPrice(itemTotal)}
                    </div>
                    <div>
                        <button onclick="removeFromCart(${item.id})" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 1.2rem;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        });
        
        body.innerHTML = `
            <div style="margin-bottom: 20px; max-height: 400px; overflow-y: auto;">
                ${itemsHtml}
            </div>
            <div style="border-top: 2px solid var(--primary); padding: 20px 0;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <span style="font-size: 1.2rem;">Total:</span>
                    <span style="font-size: 1.8rem; font-weight: bold; color: var(--primary);">${formatPrice(total)}</span>
                </div>
                <div style="display: flex; gap: 10px; justify-content: flex-end;">
                    <button onclick="document.getElementById('cartModal').style.display='none'" class="btn btn-secondary">
                        Continuer les achats
                    </button>
                    <button onclick="checkoutFromCart()" class="btn btn-success">
                        <i class="fab fa-whatsapp"></i> Commander maintenant
                    </button>
                </div>
            </div>
        `;
    }
    
    modal.style.display = 'flex';
}

// Modifier quantité
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            displayCartModal(); // Rafraîchir l'affichage
        }
    }
}

// Retirer du panier
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    displayCartModal(); // Rafraîchir l'affichage
    showNotification('Produit retiré du panier', 'info');
}

// Commander depuis le panier
function checkoutFromCart() {
    if (cart.length === 0) {
        showNotification('Votre panier est vide', 'warning');
        return;
    }
    
    // Fermer le modal du panier
    document.getElementById('cartModal').style.display = 'none';
    
    // Préparer le message pour le formulaire
    const productList = cart.map(item => `${item.name} (x${item.quantity})`).join(', ');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Ouvrir le formulaire de commande avec le résumé du panier
    document.getElementById('selectedProduct').value = productList;
    document.getElementById('purchaseModal').style.display = 'flex';
    
    // Modifier le formulaire pour gérer plusieurs produits
    const purchaseForm = document.getElementById('purchaseForm');
    const originalSubmit = purchaseForm.onsubmit;
    
    purchaseForm.onsubmit = function(e) {
        e.preventDefault();
        
        const name = document.getElementById('clientName').value;
        const firstName = document.getElementById('clientFirstName').value;
        const phone = document.getElementById('clientPhone').value;
        const payment = document.getElementById('paymentMethod');
        const paymentText = payment.options[payment.selectedIndex]?.text || 'Non spécifié';
        const address = document.getElementById('deliveryAddress').value;
        const message = document.getElementById('additionalMessage').value;
        
        // Construire le message avec tous les produits
        let productDetails = '';
        cart.forEach(item => {
            productDetails += `* ${item.name} - ${item.quantity} x ${formatPrice(item.price)} = ${formatPrice(item.price * item.quantity)}\n`;
        });
        
        const whatsappMessage = `Bonjour, je souhaite commander :%0a%0a
${productDetails}%0a
*TOTAL: ${formatPrice(total)}*%0a%0a
*Nom:* ${name} ${firstName}%0a
*Téléphone:* ${phone}%0a
*Paiement:* ${paymentText}%0a
*Adresse:* ${address || 'Non spécifiée'}%0a
*Message:* ${message || 'Aucun message'}`;
        
        window.open(`https://wa.me/22667916752?text=${whatsappMessage}`, '_blank');
        
        // ===== SAUVEGARDER LA COMMANDE POUR L'ADMIN =====
        const orderData = {
            nom: name,
            prenom: firstName,
            telephone: phone,
            produit: productList,
            paiement: paymentText,
            total: formatPrice(total),
            adresse: address || 'Non spécifiée',
            message: message || 'Aucun message'
        };
        
        // Récupérer les commandes existantes
        let orders = JSON.parse(localStorage.getItem('digital_orders') || '[]');
        
        // Ajouter la nouvelle commande
        orders.unshift({
            id: Date.now(),
            date: new Date().toLocaleString('fr-FR'),
            nom: orderData.nom,
            prenom: orderData.prenom,
            telephone: orderData.telephone,
            produit: orderData.produit,
            paiement: orderData.paiement,
            total: orderData.total,
            adresse: orderData.adresse,
            message: orderData.message,
            status: 'pending'
        });
        
        // Sauvegarder
        localStorage.setItem('digital_orders', JSON.stringify(orders));
        // ===== FIN DE LA SAUVEGARDE =====
        
        // Vider le panier après commande
        cart = [];
        saveCart();
        
        document.getElementById('purchaseModal').style.display = 'none';
        showNotification('✅ Commande envoyée ! Vous serez contacté rapidement.', 'success');
        purchaseForm.reset();
        
        // Restaurer le comportement original du formulaire
        purchaseForm.onsubmit = originalSubmit;
    };
}

// ===== GESTION DES MESSAGES DE CONTACT =====

// Sauvegarder un message
function saveContactMessage(messageData) {
    // Récupérer les messages existants
    let messages = JSON.parse(localStorage.getItem('digital_messages') || '[]');
    
    // Ajouter le nouveau message avec date
    const newMessage = {
        id: Date.now(),
        date: new Date().toLocaleString('fr-FR'),
        nom: messageData.nom,
        prenom: messageData.prenom,
        email: messageData.email,
        telephone: messageData.telephone,
        sujet: messageData.sujet,
        message: messageData.message,
        lu: false
    };
    
    messages.unshift(newMessage); // Ajouter au début
    
    // Sauvegarder
    localStorage.setItem('digital_messages', JSON.stringify(messages));
    
    return newMessage;
}

// Initialiser le formulaire de contact
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les données du formulaire
        const formData = new FormData(contactForm);
        const messageData = {
            nom: formData.get('nom'),
            prenom: formData.get('prenom'),
            email: formData.get('email'),
            telephone: formData.get('telephone'),
            sujet: formData.get('sujet'),
            message: formData.get('message')
        };
        
        // Sauvegarder le message
        saveContactMessage(messageData);
        
        // Afficher une confirmation
        showNotification('✅ Message envoyé ! Nous vous répondrons dans les plus brefs délais.', 'success');
        
        // Réinitialiser le formulaire
        contactForm.reset();
    });
}

// ===== RECHERCHE =====
function initSearch() {
    const searchInput = document.getElementById('globalSearch');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
}

function searchProducts() {
    const searchInput = document.getElementById('globalSearch');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        showNotification('🔍 Veuillez entrer un terme de recherche', 'info');
        return;
    }
    
    // Rediriger vers la page produits avec le terme de recherche
    window.location.href = `produits.html?search=${encodeURIComponent(searchTerm)}`;
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'success') {
    // Supprimer les notifications existantes
    const existingNotifications = document.querySelectorAll('.notification:not(#cartModal .notification)');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    const icon = type === 'success' ? '✅' : 
                 type === 'error' ? '❌' : 
                 type === 'warning' ? '⚠️' : 'ℹ️';
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.2rem;">${icon}</span>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Supprimer après 3 secondes
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== GOOGLE MAPS =====
function initMap() {
    const mapElement = document.getElementById('googleMap');
    if (!mapElement) return;
    
    const koudougou = { lat: 12.2500, lng: -2.3667 };
    
    const map = new google.maps.Map(mapElement, {
        zoom: 15,
        center: koudougou,
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }
        ]
    });
    
    const marker = new google.maps.Marker({
        position: koudougou,
        map: map,
        title: 'DIGITAL ELECTRONIQUE',
        animation: google.maps.Animation.DROP,
        icon: {
            url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        }
    });
    
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px;">
                <h4 style="margin: 0 0 5px; color: #4361ee;">DIGITAL ELECTRONIQUE</h4>
                <p style="margin: 0; color: #666;">
                    📍 Quartier Centre, Koudougou<br>
                    📞 +226 67 91 67 52<br>
                    🕒 Lun-Sam: 8h-18h
                </p>
            </div>
        `
    });
    
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}

// ===== FONCTIONS DE NAVIGATION =====
function navigateTo(page, newTab = false) {
    event.preventDefault();
    const baseUrl = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
    const fullPath = baseUrl + page;
    
    console.log('Navigation vers:', fullPath);
    
    if (newTab) {
        window.open(fullPath, '_blank');
    } else {
        window.location.href = fullPath;
    }
    return false;
}

// Activer le lien actif
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href') || '';
        const onclick = link.getAttribute('onclick') || '';
        
        if (href.includes(currentPage) || 
            onclick.includes(currentPage) ||
            (currentPage === 'index.html' && (href === 'index.html' || href === '/' || href === ''))) {
            link.classList.add('active');
        }
    });
}

// Exécuter au chargement
document.addEventListener('DOMContentLoaded', setActiveLink);

// Rendre les fonctions accessibles globalement
window.addToCart = addToCart;
window.viewCart = viewCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.checkoutFromCart = checkoutFromCart;
window.openDetailsModal = openDetailsModal;
window.searchProducts = searchProducts;
window.filterProducts = filterProducts;
window.resetAllFilters = resetAllFilters;
window.initMap = initMap;
window.navigateTo = navigateTo;