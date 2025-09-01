// Configurações
const WHATSAPP_NUMBER = '5524993106425';

// Elementos DOM
let masculinoGrid, femininoGrid, searchInput, modal, modalContent;
let currentProducts = [];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupEventListeners();
    loadProducts();
    setupParallax();
    setupNavigation();
});

// Inicializar elementos DOM
function initializeElements() {
    masculinoGrid = document.getElementById('masculino-grid');
    femininoGrid = document.getElementById('feminino-grid');
    searchInput = document.getElementById('search');
    modal = document.getElementById('product-modal');
    modalContent = document.querySelector('.modal-content');
}

// Configurar event listeners
function setupEventListeners() {
    // Busca
    searchInput.addEventListener('input', debounce(filterProducts, 300));
    
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    document.getElementById('price-filter').addEventListener('change', filterProducts);
    
    // Modal
    document.querySelector('.close').addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Navegação mobile
    document.querySelector('.hamburger').addEventListener('click', toggleMobileMenu);
    
    // Scroll suave para links de navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // Fechar menu mobile se estiver aberto
            document.querySelector('.nav-menu').classList.remove('active');
        });
    });
}

// Carregar produtos
function loadProducts() {
    if (typeof produtos === 'undefined') {
        console.error('Dados dos produtos não encontrados');
        return;
    }
    
    currentProducts = produtos;
    renderProducts();
}

// Renderizar produtos
function renderProducts() {
    renderMasculineProducts();
    renderFeminineProducts();
}

// Renderizar produtos masculinos
function renderMasculineProducts() {
    const masculineProducts = currentProducts.filter(product => product.sexo === 'masculino');
    masculinoGrid.innerHTML = masculineProducts.map(product => createProductCard(product)).join('');
    
    // Adicionar event listeners para os cards
    masculinoGrid.querySelectorAll('.product-card').forEach((card, index) => {
        const product = masculineProducts[index];
        card.addEventListener('click', () => openModal(product));
        
        // Event listeners para botões de compra
        card.querySelectorAll('.buy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const size = btn.dataset.size;
                openWhatsApp(product, size);
            });
        });
    });
}

// Renderizar produtos femininos
function renderFeminineProducts() {
    const feminineProducts = currentProducts.filter(product => product.sexo === 'feminino');
    femininoGrid.innerHTML = feminineProducts.map(product => createProductCard(product)).join('');
    
    // Adicionar event listeners para os cards
    femininoGrid.querySelectorAll('.product-card').forEach((card, index) => {
        const product = feminineProducts[index];
        card.addEventListener('click', () => openModal(product));
        
        // Event listeners para botões de compra
        card.querySelectorAll('.buy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const size = btn.dataset.size;
                openWhatsApp(product, size);
            });
        });
    });
}

// Criar card de produto
function createProductCard(product) {
    const preco50ml = formatPrice(product.preco50ml);
    const preco100ml = formatPrice(product.preco100ml);
    
    return `
        <div class="product-card" data-name="${product.nome.toLowerCase()}" data-type="${product.tipo}" data-gender="${product.sexo}">
            <img src="${product.imagem}" alt="${product.nome}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-name">${product.nome}</h3>
                <span class="product-type">${product.tipo}</span>
                <div class="product-prices">
                    <div class="price-item">
                        <div class="price-label">50ml</div>
                        <div class="price-value">R$ ${preco50ml}</div>
                    </div>
                    <div class="price-item">
                        <div class="price-label">100ml</div>
                        <div class="price-value">R$ ${preco100ml}</div>
                    </div>
                </div>
                <div class="product-actions">
                    <button class="buy-btn" data-size="50ml">Comprar 50ml</button>
                    <button class="buy-btn" data-size="100ml">Comprar 100ml</button>
                </div>
            </div>
        </div>
    `;
}

// Formatar preço
function formatPrice(price) {
    return price.toString().replace('.', ',');
}

// Filtrar produtos
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeGenderFilter = document.querySelector('.filter-btn[data-filter].active:not([data-filter="todos"])');
    const activeTypeFilter = document.querySelector('.filter-btn[data-filter].active:not([data-filter="todos-tipos"])');
    const priceFilter = document.getElementById('price-filter').value;
    
    // Filtrar por nome
    let filteredProducts = produtos.filter(product => {
        return product.nome.toLowerCase().includes(searchTerm);
    });
    
    // Filtrar por gênero
    if (activeGenderFilter) {
        const gender = activeGenderFilter.dataset.filter;
        filteredProducts = filteredProducts.filter(product => product.sexo === gender);
    }
    
    // Filtrar por tipo
    if (activeTypeFilter) {
        const type = activeTypeFilter.dataset.filter;
        filteredProducts = filteredProducts.filter(product => product.tipo === type);
    }
    
    // Filtrar por preço
    if (priceFilter !== 'todos') {
        filteredProducts = filteredProducts.filter(product => {
            const price50ml = parseFloat(product.preco50ml);
            const price100ml = parseFloat(product.preco100ml);
            const minPrice = Math.min(price50ml, price100ml);
            
            switch (priceFilter) {
                case 'ate-80':
                    return minPrice <= 80;
                case '80-120':
                    return minPrice > 80 && minPrice <= 120;
                case 'acima-120':
                    return minPrice > 120;
                default:
                    return true;
            }
        });
    }
    
    currentProducts = filteredProducts;
    renderProducts();
    
    // Mostrar/ocultar seções baseado nos resultados
    toggleSectionVisibility();
}

// Alternar visibilidade das seções
function toggleSectionVisibility() {
    const hasMasculine = currentProducts.some(p => p.sexo === 'masculino');
    const hasFeminine = currentProducts.some(p => p.sexo === 'feminino');
    
    document.getElementById('masculino').style.display = hasMasculine ? 'block' : 'none';
    document.getElementById('feminino').style.display = hasFeminine ? 'block' : 'none';
}

// Manipular clique nos filtros
function handleFilterClick(e) {
    const button = e.target;
    const filterType = button.dataset.filter;
    
    // Se é um filtro de categoria ou tipo
    if (filterType === 'todos' || filterType === 'masculino' || filterType === 'feminino') {
        // Remover active de todos os botões de gênero
        document.querySelectorAll('.filter-btn[data-filter="todos"], .filter-btn[data-filter="masculino"], .filter-btn[data-filter="feminino"]')
            .forEach(btn => btn.classList.remove('active'));
    } else if (filterType === 'todos-tipos' || filterType === 'normal' || filterType === 'especial') {
        // Remover active de todos os botões de tipo
        document.querySelectorAll('.filter-btn[data-filter="todos-tipos"], .filter-btn[data-filter="normal"], .filter-btn[data-filter="especial"]')
            .forEach(btn => btn.classList.remove('active'));
    }
    
    // Adicionar active ao botão clicado
    button.classList.add('active');
    
    // Aplicar filtros
    filterProducts();
}

// Abrir modal
function openModal(product) {
    document.getElementById('modal-image').src = product.imagem;
    document.getElementById('modal-name').textContent = product.nome;
    document.getElementById('modal-type').textContent = product.tipo.toUpperCase();
    document.getElementById('modal-price-50ml').textContent = `R$ ${formatPrice(product.preco50ml)}`;
    document.getElementById('modal-price-100ml').textContent = `R$ ${formatPrice(product.preco100ml)}`;
    
    // Configurar botões de compra do modal
    document.getElementById('buy-50ml').onclick = () => openWhatsApp(product, '50ml');
    document.getElementById('buy-100ml').onclick = () => openWhatsApp(product, '100ml');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Animação de entrada
    modalContent.style.transform = 'scale(0.8)';
    modalContent.style.opacity = '0';
    setTimeout(() => {
        modalContent.style.transform = 'scale(1)';
        modalContent.style.opacity = '1';
        modalContent.style.transition = 'all 0.3s ease';
    }, 10);
}

// Fechar modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Abrir WhatsApp
function openWhatsApp(product, size) {
    const price = size === '50ml' ? product.preco50ml : product.preco100ml;
    const formattedPrice = formatPrice(price);
    
    const message = `Olá! Gostaria de encomendar o perfume ${product.nome} - ${size} por R$ ${formattedPrice}`;
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
}

// Toggle menu mobile
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Configurar parallax
function setupParallax() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-element');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        // Efeito parallax no vídeo hero
        const heroVideo = document.querySelector('.hero-video');
        if (heroVideo) {
            const heroRect = heroVideo.getBoundingClientRect();
            if (heroRect.bottom >= 0 && heroRect.top <= window.innerHeight) {
                const offset = scrolled * 0.5;
                heroVideo.style.transform = `scale(1.1) translateY(${offset}px)`;
            }
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Configurar navegação
function setupNavigation() {
    // Destacar seção ativa na navegação
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavigation() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', debounce(highlightNavigation, 100));
    
    // Mudar header background no scroll
    function updateHeaderBackground() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
        }
    }
    
    window.addEventListener('scroll', debounce(updateHeaderBackground, 100));
}

// Função debounce para otimizar performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Animações de entrada
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    document.querySelectorAll('.product-card, .feature, .about-text').forEach(el => {
        observer.observe(el);
    });
}

// Inicializar animações quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', setupScrollAnimations);

// Tratamento de erros para imagens
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            e.target.style.display = 'none';
            console.warn('Imagem não encontrada:', e.target.src);
        }
    }, true);
});

// Preloader (opcional)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Smooth scroll para navegadores que não suportam CSS scroll-behavior
if (!CSS.supports('scroll-behavior', 'smooth')) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Adicionar classe para produtos filtrados
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar classes CSS para animações de filtro
    const style = document.createElement('style');
    style.textContent = `
        .product-card {
            transition: all 0.3s ease;
        }
        
        .product-card.filtered-out {
            opacity: 0;
            transform: scale(0.8);
            pointer-events: none;
        }
        
        .animate-in {
            animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});
