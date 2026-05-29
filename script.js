const products = [];

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