const products = [
    {
        id: 1,
        name: "Warzone Advanced Menu",
        game: "Call of Duty: Warzone",
        price: "$24.99",
        category: "FPS",
        description: "Experience the ultimate tactical advantage in Warzone. Our advanced menu provides undetected features that give you total control over the battlefield. Stay ahead of the competition with fully customizable aim and vision enhancements.",
        shortDesc: "Dominate Verdansk with undetected aimbot, ESP, and full unlock tools.",
        features: ["Aimbot with Prediction", "Box & Glow ESP", "Wallhacks", "No Recoil & No Spread", "Unlock All Cosmetics", "Radar Hack", "Player Tracking"]
    },
    {
        id: 2,
        name: "GTA V Chaos Engine",
        game: "Grand Theft Auto V",
        price: "$19.99",
        category: "Action",
        description: "The most stable and feature-packed menu for Los Santos. Whether you want to grind money or just cause absolute mayhem, Chaos Engine has you covered with regular updates and dedicated support.",
        shortDesc: "Money drops, god mode, vehicle spawning — total control in LS.",
        features: ["Stealth Money Drop", "God Mode & Invisibility", "Teleport to Waypoint", "Spawn Any Vehicle", "Remote Player Options", "Casino Recovery", "Session Protections"]
    },
    {
        id: 3,
        name: "Apex Legends Predator Pack",
        game: "Apex Legends",
        price: "$29.99",
        category: "FPS",
        description: "Climb to Predator rank with ease. Our lightweight Apex menu is designed for performance and safety, ensuring you stay ahead of the competition with humanized features that feel natural.",
        shortDesc: "Smart aim, player glow, recoil control — reach Predator fast.",
        features: ["Smart Aim Assist", "Item & Player Glow", "Movement Velocity Scripts", "No Sway", "Recoil Control System", "Auto Loot", "Hitbox Expansion"]
    },
    {
        id: 4,
        name: "Fortnite Victory Royal",
        game: "Fortnite",
        price: "$14.99",
        category: "Battle Royale",
        description: "Get that #1 Victory Royale every time. Designed to bypass the latest anti-cheats while providing powerful building and aiming capabilities. Regular updates keep you undetected.",
        shortDesc: "Soft aim, wallhack, instant builds — win every match.",
        features: ["Soft Aim", "Player Wallhack", "Instant Build & Edit", "Fly Hack (Limited)", "No Bloom", "Fast Reload", "Aim Assist"]
    },
    {
        id: 5,
        name: "Valorant Radiant Edge",
        game: "Valorant",
        price: "$34.99",
        category: "FPS",
        description: "Premium internal cheat for Valorant. Focus on high security and humanized features to ensure longevity and a natural-looking gameplay style. The top choice for competitive players.",
        shortDesc: "Humanized aimbot, skin changer, trigger bot — stay radiant.",
        features: ["Internal Humanized Aimbot", "Visible Check ESP", "Skin Changer (Client-side)", "Mini-map Radar", "Trigger Bot", "Highly Undetected", "Colored ESP"]
    },
    {
        id: 6,
        name: "Minecraft Infinity Mod",
        game: "Minecraft",
        price: "$9.99",
        category: "Sandbox",
        description: "Break the limits of Minecraft. From anarchy servers to competitive minigames, Infinity gives you the power of a god with a sleek, toggleable menu interface.",
        shortDesc: "Flight, killaura, x-ray — ultimate Minecraft domination.",
        features: ["Creative Flight", "Multi-Aura (KillAura)", "X-Ray Vision", "Auto-Mine & Scripting", "Inventory Manager", "Speed Hack", "No Fall Damage"]
    },
    {
        id: 7,
        name: "Rust Raid Master",
        game: "Rust",
        price: "$22.99",
        category: "Survival",
        description: "Dominate the wasteland with the most comprehensive Rust cheat suite. Farm faster, aim better, and raid smarter with features designed for hardcore survival gameplay.",
        shortDesc: "ESP, auto-farm, recoil control — rule the wasteland.",
        features: ["Ore & Player ESP", "Auto-Farm Scripts", "Recoil Control", "No Recoil", "Silent Aim", "Door ESP", "Radar"]
    },
    {
        id: 8,
        name: "CS2 Pro Suite",
        game: "Counter-Strike 2",
        price: "$27.99",
        category: "FPS",
        description: "The ultimate competitive advantage for CS2. Our Pro Suite combines pinpoint accuracy with full visibility features, all packaged in a clean, customizable interface.",
        shortDesc: "Professional aim, ESP, glow — the edge you need.",
        features: ["Rage & Legit Aimbot", "Glow & Chams ESP", "Trigger Bot", "No Flash", "Bunny Hop", "Rank Revealer", "Skin Changer"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const modal = document.getElementById('productModal');
    const modalDetails = document.getElementById('modalDetails');
    const closeBtn = document.querySelector('.close-modal');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Mobile Menu Toggle
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('active');
        });

        // Close mobile menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileBtn.classList.remove('active');
            });
        });
    }

    // Sticky nav background on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(7, 10, 16, 0.95)';
            header.style.borderBottom = '1px solid rgba(0, 242, 255, 0.1)';
        } else {
            header.style.background = 'rgba(7, 10, 16, 0.85)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        }
    });

    // Render Products
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <span class="product-category">${product.category}</span>
            <h3>${product.name}</h3>
            <p class="product-game"><i class="fas fa-gamepad"></i> ${product.game}</p>
            <p class="product-desc-short">${product.shortDesc}</p>
            <div class="product-card-footer">
                <span class="product-price">${product.price}</span>
                <span class="product-view-btn">
                    View Details <i class="fas fa-arrow-right"></i>
                </span>
            </div>
        `;
        card.addEventListener('click', () => openModal(product));
        productGrid.appendChild(card);
    });

    // Modal Logic
    function openModal(product) {
        const featuresHtml = product.features.map(f => 
            `<li><i class="fas fa-check-circle"></i> ${f}</li>`
        ).join('');

        modalDetails.innerHTML = `
            <div class="modal-header">
                <h2><i class="fas fa-crown" style="color: var(--accent-color); font-size: 1.8rem; margin-right: 10px;"></i>${product.name}</h2>
                <p class="modal-game"><i class="fas fa-gamepad"></i> ${product.game}</p>
            </div>
            <p class="modal-description">${product.description}</p>
            <div class="modal-features">
                <h4><i class="fas fa-bolt"></i> Features & Cheats Included</h4>
                <ul class="feature-list">
                    ${featuresHtml}
                </ul>
            </div>
            <div class="modal-footer">
                <span class="modal-price">${product.price}</span>
                <a href="https://discord.gg/x2R9GCa6q" target="_blank" class="btn btn-primary">
                    <i class="fab fa-discord"></i> Purchase on Discord
                </a>
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Prevent background scroll on modal open
        document.body.style.paddingRight = '8px';
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0';
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});