const products = [
    {
        id: 1,
        name: "Ancient Rust",
        game: "Rust",
        price: "€5.00",
        category: "Survival",
        description: "Fully undetected Rust cheat with instant delivery. Features premium aimbot, full ESP, world ESP, and extensive misc options. Choose your duration — 1 Day, 7 Days, or 30 Days. Compatible with Windows 10/11, Intel/AMD. Secure Boot must be disabled.",
        shortDesc: "UNDETECTED (WORKING) — Aimbot, ESP, Radar & more. Instant delivery.",
        icon: "🦀",
        features: [
            "UNDETECTED — Working on latest Rust patch",
            "Instant Delivery via Discord",
            "Windows 10/11 & Intel/AMD Support",
            "AIMBOT: Aim key, Smooth, Fov, Bone selection",
            "Target: Enemies, NPCs, Teammates, Sleepers",
            "Lock Target with configurable key",
            "ESP: Box, Name, Weapon, Distance, Skeleton",
            "ESP: Enemy / Teammate / NPC / Sleeper toggles",
            "World ESP: Ore, Crates, Animals, Collectables",
            "World ESP: Deployables, Traps, Transport",
            "Off Arrows with adjustable range",
            "Radar display",
            "MISC: Shotgun Nospread, Thick Bullet",
            "MISC: Bow Thick Bullet Override, Instant Eoka",
            "MISC: Always Automatic, Heli Hit Box Override",
            "FPS limit, Show FPS, Text style config",
            "Secure Boot Disabled required",
            "16GB RAM recommended"
        ],
        pricing: [
            { duration: "1 Day", price: "€5.00", stock: 7 },
            { duration: "7 Days", price: "€21.99", stock: 3 },
            { duration: "30 Days", price: "€42.99", stock: 3 }
        ]
    },
    {
        id: 2,
        name: "a3 Scripts",
        game: "Roblox",
        price: "€10.99",
        category: "Scripts",
        description: "🔥 100+ purchases and counting! Our private Roblox scripts are fully working and undetected. Packed with Aimbot, ESP, and support for 15+ popular Roblox games including Da Hood, Arsenal, Phantom Forces, and more. Lifetime key — buy once, use forever. Windows 10/11, Intel/AMD compatible.",
        shortDesc: "👁️ PRIVATE WORKING SCRIPTS — 100+ bought! Aimbot, ESP, 15+ games supported.",
        icon: "👁️",
        badge: "Popular",
        features: [
            "🔥 100+ Purchases — Trusted by the community",
            "UNDETECTED — Private working scripts",
            "Instant Delivery via Discord",
            "Lifetime access — one-time payment",
            "Windows 10/11 & Intel/AMD Support",
            "AIMBOT: Enable/Disable, Draw FOV, Smooth",
            "Triggerbot & Prediction",
            "ESP: Box ESP, Skeleton, NameTag ESP",
            "ESP: SnapLine, Head",
            "SUPPORTED GAMES: Da Hood (Fully Silent-Aim)",
            "SUPPORTED: Fallen (Semi-Silent Aim) & all copies",
            "SUPPORTED: Strucid, Rush Point (Silent Aim)",
            "SUPPORTED: Arsenal, Phantom Forces",
            "SUPPORTED: Trident Survival, Aftermath",
            "SUPPORTED: Bad Business, Rivals",
            "SUPPORTED: Blackhawk Rescue Mission 5, Wild West",
            "SUPPORTED: Sound Space (Auto-Play)",
            "SUPPORTED: Fisch (Instant reel, Auto Fish)",
            "SUPPORTED: Re Ghoul (Custom ESP)",
            "SUPPORTED: Bladeball (Autoplay)",
            "MISC: Scripts, Speedhack, Playerlist",
            "MISC: NoClip, Save Config"
        ],
        pricing: [
            { duration: "Lifetime", price: "€10.99", stock: 3 }
        ]
    }
];

const fakeReviews = [
    { name: "ShadowX_99", rating: 5, text: "Legit seller, bought the Rust menu and it's been flawless for weeks. Fast delivery too!", date: "2 days ago", verified: true },
    { name: "NeonKnight", rating: 5, text: "Was skeptical at first but a3modz is the real deal. Undetected, smooth aimbot, great support on Discord.", date: "5 days ago", verified: true },
    { name: "ViperzYT", rating: 5, text: "Trusted seller! 3rd purchase already. Scripts work perfectly and updates are quick.", date: "1 week ago", verified: true },
    { name: "CryptoWraith", rating: 4, text: "Good quality mods, the ESP is clean. Only wish there were more payment options. But overall solid.", date: "1 week ago", verified: true },
    { name: "RustKing_PL", rating: 5, text: "Best Rust cheats I've used. The thick bullet and no spread are insane. Worth every euro.", date: "2 weeks ago", verified: true },
    { name: "PixelDemon", rating: 5, text: "Bought the Roblox scripts for Da Hood, works flawlessly. Silent aim is OP. 100% recommended!", date: "2 weeks ago", verified: true },
    { name: "FrostByte_GG", rating: 5, text: "This seller is goated. Instant delivery, great prices, and the menus are undetected. Don't sleep on a3modz.", date: "3 weeks ago", verified: true },
    { name: "AceWyvern", rating: 4, text: "Second time buying, always satisfied. Customer service on Discord is super helpful and fast.", date: "3 weeks ago", verified: true }
];

document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const modal = document.getElementById('productModal');
    const modalDetails = document.getElementById('modalDetails');
    const closeBtn = document.querySelector('.close-modal');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const reviewsGrid = document.getElementById('reviewsGrid');
    const reviewForm = document.getElementById('reviewForm');

    // Render fake reviews
    if (reviewsGrid) {
        renderReviews(fakeReviews);
    }

    // Review form handler
    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('reviewName').value;
            const rating = parseInt(document.getElementById('reviewRating').value);
            const text = document.getElementById('reviewText').value;
            
            const newReview = {
                name: name,
                rating: rating,
                text: text,
                date: 'Just now',
                verified: true
            };
            
            fakeReviews.unshift(newReview);
            renderReviews(fakeReviews);
            reviewForm.reset();
            
            // Show success message
            const btn = reviewForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Review Posted!';
            btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
            }, 2000);
        });
    }

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
        if (product.badge) {
            card.classList.add('has-badge');
        }
        const badgeHtml = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
        card.innerHTML = `
            ${badgeHtml}
            <span class="product-category">${product.icon || ''} ${product.category}</span>
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

        let pricingHtml = '';
        if (product.pricing) {
            pricingHtml = `
                <div class="modal-pricing">
                    <h4><i class="fas fa-tag"></i> Pricing & Duration</h4>
                    <div class="pricing-grid">
                        ${product.pricing.map(p => `
                            <div class="pricing-card">
                                <span class="pricing-duration">${p.duration}</span>
                                <span class="pricing-amount">${p.price}</span>
                                <span class="pricing-stock">${p.stock} in stock</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        modalDetails.innerHTML = `
            <div class="modal-header">
                <h2>${product.icon || ''} ${product.name}</h2>
                <p class="modal-game"><i class="fas fa-gamepad"></i> ${product.game}</p>
            </div>
            <p class="modal-description">${product.description}</p>
            ${pricingHtml}
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

    // Render Reviews
    function renderReviews(reviews) {
        reviewsGrid.innerHTML = reviews.map(r => `
            <div class="review-card">
                <div class="review-header">
                    <div class="review-author">
                        <div class="review-avatar">${r.name.charAt(0)}</div>
                        <div>
                            <div class="review-name">${r.name}</div>
                            ${r.verified ? '<div class="review-verified"><i class="fas fa-check-circle"></i> Verified Purchase</div>' : ''}
                        </div>
                    </div>
                    <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
                </div>
                <p class="review-text">"${r.text}"</p>
                <div class="review-date">${r.date}</div>
            </div>
        `).join('');
    }

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