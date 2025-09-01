// Amber storefront interactivity

const WHATSAPP = '5524993106425';

// Helper: format currency pt-BR
const toBRL = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Convert "119,90" -> 119.90 number
const parsePrice = (s) => Number(String(s).replace(/\./g, '').replace(',', '.'));

// Products dataset (from spec)
const PRODUCTS = [
  { name: 'Kayak', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft1.jpg' },
  { name: 'Bvlgari', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft2.jpg' },
  { name: 'Scandal Homme', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft3.jpg' },
  { name: 'Hugo Boss', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft4.jpg' },
  { name: 'Polo Black', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft5.jpg' },
  { name: 'One Million', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft6.jpg' },
  { name: 'Essencial', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft7.jpg' },
  { name: 'Calvin Klein', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft8.jpg' },
  { name: 'Drakar Noir', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft9.jpg' },
  { name: 'Diesel Fuel', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft10.jpg' },
  { name: 'Cool Water', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft11.jpg' },
  { name: 'Ferrari Black', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft12.jpg' },
  { name: 'Paco Rabanne', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft13.jpg' },
  { name: '212 - Sexy, Heroes, Vip', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft14.jpg' },
  { name: 'Animale', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft15.jpg' },
  { name: 'My Way', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/sem foto.jpg' },
  { name: 'Dolce Gabbana', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft17.jpg' },
  { name: 'Armani', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft18.jpg' },
  { name: 'Azzaro', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft19.jpg' },
  { name: 'Mont Blanc', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft20.jpg' },
  { name: 'Conexion', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft21.jpg' },
  { name: 'Silver Scent', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft22.jpg' },
  { name: 'Insensatez', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft23.jpg' },
  { name: 'Bad Boy', sex: 'masculino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft24.jpg' },
  { name: 'Invictus', sex: 'masculino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft25.jpg' },
  { name: 'Creed Aventus', sex: 'masculino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft26.jpg' },
  { name: 'Bvlgari Black', sex: 'masculino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft27.jpg' },
  { name: 'Bacarah', sex: 'masculino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft28.jpg' },
  { name: 'Sauvage', sex: 'masculino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft29.jpg' },
  { name: 'Malbec Noir', sex: 'masculino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft30.jpg' },
  { name: 'Bleu Chanel', sex: 'masculino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft31.jpg' },
  { name: 'Jean Paul Galtier', sex: 'masculino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft32.jpg' },
  { name: 'Lancaster', sex: 'masculino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft33.jpg' },
  { name: 'Mandarino', sex: 'masculino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft34.jpg' },
  { name: 'Scandal', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft35.jpg' },
  { name: 'Angel', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft36.jpg' },
  { name: 'Chloe', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft37.jpg' },
  { name: 'Egeo Dolce', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft38.jpg' },
  { name: 'Olympea', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft39.jpg' },
  { name: 'Florata Blue', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft40.jpg' },
  { name: 'CK One', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft41.jpg' },
  { name: 'Hypnotic Poison', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft42.jpg' },
  { name: 'Chanel 5', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft43.jpg' },
  { name: 'Absinto', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft44.jpg' },
  { name: 'Opium', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft45.jpg' },
  { name: 'Lili', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/sem foto.jpg' },
  { name: 'Jadore', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft47.jpg' },
  { name: '212 - Sexy, Heroes, Vip', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft48.jpg' },
  { name: 'Bvlgari', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft49.jpg' },
  { name: 'Amor Amor', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft50.jpg' },
  { name: 'Dolce Gabbana', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft51.jpg' },
  { name: 'Armani', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft52.jpg' },
  { name: 'Lou Lou', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft53.jpg' },
  { name: 'Flower by Kenzo', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft54.jpg' },
  { name: 'La Vie est Belle', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft55.jpg' },
  { name: 'Gabriela Sabatine', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft56.jpg' },
  { name: 'Euphoria', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft57.jpg' },
  { name: 'Coco Mademoiselle', sex: 'feminino', type: 'normal', price100: '119,90', price50: '69,90', image: './assets/imgs/ft58.jpg' },
  { name: 'Dior Joy', sex: 'feminino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft59.jpg' },
  { name: 'Scandal by Night', sex: 'feminino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/sem foto.jpg' },
  { name: 'Good Girl CH', sex: 'feminino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft61.jpg' },
  { name: 'Haya Lattafa', sex: 'feminino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft62.jpg' },
  { name: 'Ameerat al Arab Rose', sex: 'feminino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft63.jpg' },
  { name: 'Vezzo', sex: 'feminino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft64.jpg' },
  { name: 'Al Wataniah Shagaf', sex: 'feminino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft65.jpg' },
  { name: 'Jo Malone', sex: 'feminino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft66.jpg' },
  { name: 'Pegasus de Marly', sex: 'feminino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft67.jpg' },
  { name: 'Miss Dior', sex: 'feminino', type: 'especial', price100: '139,90', price50: '79,90', image: './assets/imgs/ft68.jpg' },
];

// DOM
const el = (id) => document.getElementById(id);
const gridMasculinos = el('gridMasculinos');
const gridFemininos = el('gridFemininos');

// Filters
const searchInput = el('searchInput');
const sexSelect = el('sexSelect');
const typeSelect = el('typeSelect');
const sizeFilterSelect = el('sizeFilterSelect');
const priceRange = el('priceRange');
const priceValue = el('priceValue');
const resetFilters = el('resetFilters');

// Modal
const productModal = el('productModal');
const modalClose = el('modalClose');
const modalImage = el('modalImage');
const modalThumbs = el('modalThumbs');
const modalName = el('modalName');
const modalMeta = el('modalMeta');
const modalSize = el('modalSize');
const modalPrice = el('modalPrice');
const modalBuy = el('modalBuy');
const modalSecondaryBuy = el('modalSecondaryBuy');

// State
let state = {
  search: '',
  sex: 'todos',
  type: 'todos',
  size: '100',
  priceMax: 200,
};

const maxPriceAvailable = Math.max(
  ...PRODUCTS.flatMap((p) => [parsePrice(p.price50), parsePrice(p.price100)])
);

// Utilities
const whatsappLink = ({ name, size, price }) => {
  const message = `Olá! Quero comprar o perfume ${name} (${size} ml) por ${toBRL(price)}.`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
};

const cardTemplate = (p) => {
  const price100 = parsePrice(p.price100);
  const price50 = parsePrice(p.price50);
  return `
    <div class="group relative rounded-lg overflow-hidden bg-white/5 border border-accent/10 hover:border-accent/30 transition">
      <button class="absolute top-2 right-2 z-10 p-2 rounded bg-black/40 text-white/90 hover:bg-black/60" data-action="open" data-name="${p.name}">
        <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
      </button>
      <div class="aspect-[3/4] bg-black/30 overflow-hidden">
    <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition" onerror="this.onerror=null;this.src='./assets/imgs/logo-small-circle.png'" />
      </div>
      <div class="p-3">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h4 class="font-medium">${p.name}</h4>
            <div class="text-xs text-gold-900">${p.sex} • ${p.type}</div>
          </div>
        </div>
        <div class="mt-3 grid grid-cols-2 gap-2">
          <a href="${whatsappLink({ name: p.name, size: 50, price: price50 })}" target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-1 px-3 py-2 rounded border border-accent/40 text-accent hover:bg-accent/10 text-sm">
            50 ml · ${toBRL(price50)}
          </a>
          <a href="${whatsappLink({ name: p.name, size: 100, price: price100 })}" target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-1 px-3 py-2 rounded bg-accent text-primary font-semibold text-sm">
            100 ml · ${toBRL(price100)}
          </a>
        </div>
      </div>
    </div>
  `;
};

function applyFilters() {
  const q = state.search.toLowerCase();
  const selectedSize = state.size; // '50' or '100'
  let filtered = PRODUCTS.filter((p) => {
    const matchesName = p.name.toLowerCase().includes(q);
    const matchesSex = state.sex === 'todos' || p.sex === state.sex;
    const matchesType = state.type === 'todos' || p.type === state.type;
    const price = selectedSize === '50' ? parsePrice(p.price50) : parsePrice(p.price100);
    const matchesPrice = price <= state.priceMax;
    return matchesName && matchesSex && matchesType && matchesPrice;
  });

  renderGrids(filtered);
}

function renderGrids(items) {
  const masculinos = items.filter((p) => p.sex === 'masculino').map(cardTemplate).join('');
  const femininos = items.filter((p) => p.sex === 'feminino').map(cardTemplate).join('');
  gridMasculinos.innerHTML = masculinos || emptyState('masculino');
  gridFemininos.innerHTML = femininos || emptyState('feminino');

  // Bind open modal buttons
  document.querySelectorAll('[data-action="open"]').forEach((btn) => {
    btn.addEventListener('click', () => openProduct(btn.dataset.name));
  });
}

function emptyState(sex) {
  return `
    <div class="col-span-full text-center text-gold-900 py-10">
      Nenhum perfume ${sex === 'masculino' ? 'masculino' : 'feminino'} encontrado com os filtros atuais.
    </div>
  `;
}

function openProduct(name) {
  const p = PRODUCTS.find((x) => x.name === name);
  if (!p) return;
  modalName.textContent = p.name;
  modalMeta.textContent = `${p.sex} • ${p.type}`;
  modalImage.src = p.image;
  modalImage.alt = p.name;
  modalSize.value = '100';
  updateModalPriceAndLinks(p);
  productModal.classList.remove('hidden');
}

function updateModalPriceAndLinks(p) {
  const size = modalSize.value;
  const price = size === '50' ? parsePrice(p.price50) : parsePrice(p.price100);
  modalPrice.textContent = `Preço: ${toBRL(price)}`;
  modalBuy.href = whatsappLink({ name: p.name, size, price });
  modalSecondaryBuy.onclick = () => {
    const s2 = size === '50' ? '100' : '50';
    const price2 = s2 === '50' ? parsePrice(p.price50) : parsePrice(p.price100);
    window.open(whatsappLink({ name: p.name, size: s2, price: price2 }), '_blank');
  };
}

function closeModal() { productModal.classList.add('hidden'); }

// Parallax effect for elements with [data-parallax]
function setupParallax() {
  const nodes = Array.from(document.querySelectorAll('[data-parallax]'));
  const onScroll = () => {
    const y = window.scrollY;
    nodes.forEach((n) => {
      const speed = parseFloat(n.getAttribute('data-speed') || '0.3');
      n.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function init() {
  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Setup price range
  priceRange.max = String(Math.ceil(maxPriceAvailable / 10) * 10);
  priceRange.value = priceRange.max;
  state.priceMax = Number(priceRange.value);
  priceValue.textContent = toBRL(state.priceMax);

  // Render initial
  applyFilters();

  // Listeners
  searchInput.addEventListener('input', (e) => { state.search = e.target.value; applyFilters(); });
  sexSelect.addEventListener('change', (e) => { state.sex = e.target.value; applyFilters(); });
  typeSelect.addEventListener('change', (e) => { state.type = e.target.value; applyFilters(); });
  sizeFilterSelect.addEventListener('change', (e) => { state.size = e.target.value; applyFilters(); });
  priceRange.addEventListener('input', (e) => { state.priceMax = Number(e.target.value); priceValue.textContent = toBRL(state.priceMax); applyFilters(); });
  resetFilters.addEventListener('click', () => {
    state = { search: '', sex: 'todos', type: 'todos', size: '100', priceMax: Number(priceRange.max) };
    searchInput.value = '';
    sexSelect.value = 'todos';
    typeSelect.value = 'todos';
    sizeFilterSelect.value = '100';
    priceRange.value = priceRange.max;
    priceValue.textContent = toBRL(state.priceMax);
    applyFilters();
  });

  // Modal
  modalClose.addEventListener('click', closeModal);
  productModal.addEventListener('click', (e) => { if (e.target === productModal) closeModal(); });
  modalSize.addEventListener('change', () => {
    const p = PRODUCTS.find((x) => x.name === modalName.textContent);
    if (p) updateModalPriceAndLinks(p);
  });

  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }

  setupParallax();
}

document.addEventListener('DOMContentLoaded', init);
