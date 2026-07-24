let products = [];
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    products = getProducts();
    renderProducts(products);
    updateCartUI();
});

// Renderização dos cards no catálogo
function renderProducts(items) {
    const container = document.getElementById("productsContainer");
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = `<p style="color:#a0a0a0; text-align:center; grid-column: 1/-1;">Nenhum produto encontrado.</p>`;
        return;
    }

    container.innerHTML = items.map(product => `
        <div class="product-card" onclick="openProductDetailModal(${product.id})">
            <div class="product-image-box">
                <span class="product-tag">${product.tag || 'DROP'}</span>
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-prices">
                    <span class="price-current">R$ ${Number(product.price).toFixed(2).replace('.', ',')}</span>
                    ${product.oldPrice ? `<span class="price-old">R$ ${Number(product.oldPrice).toFixed(2).replace('.', ',')}</span>` : ''}
                </div>
                <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                    <i class="fa-solid fa-cart-plus"></i> ADICIONAR
                </button>
            </div>
        </div>
    `).join('');
}

// Filtro por Categoria
function filterByCategory(category) {
    if (category === 'todas') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// Modal de Detalhes do Produto
function openProductDetailModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    document.getElementById("modalProductImage").src = product.image;
    document.getElementById("modalProductTitle").innerText = product.name;
    document.getElementById("modalProductTag").innerText = product.tag || "DROP";
    document.getElementById("modalProductPrice").innerText = `R$ ${Number(product.price).toFixed(2).replace('.', ',')}`;
    document.getElementById("modalProductOldPrice").innerText = product.oldPrice ? `R$ ${Number(product.oldPrice).toFixed(2).replace('.', ',')}` : "";
    document.getElementById("modalProductDescription").innerText = product.description || "Sem descrição disponível para este produto.";

    const addBtn = document.getElementById("modalAddToCartBtn");
    addBtn.onclick = () => {
        addToCart(product.id);
        closeProductDetailModal();
    };

    document.getElementById("productDetailModal").style.display = "flex";
}

function closeProductDetailModal() {
    document.getElementById("productDetailModal").style.display = "none";
}

// Funções do Carrinho
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    cart.push(product);
    updateCartUI();
    toggleCartModal(true); // Abre o carrinho ao adicionar
}

function updateCartUI() {
    const cartCount = document.getElementById("cartCount");
    const cartList = document.getElementById("cartItemsList");
    const cartTotal = document.getElementById("cartTotalValue");

    if (cartCount) cartCount.innerText = cart.length;

    if (cartList) {
        if (cart.length === 0) {
            cartList.innerHTML = `<p style="color: #a0a0a0; text-align: center;">Seu carrinho está vazio.</p>`;
        } else {
            cartList.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">R$ ${Number(item.price).toFixed(2).replace('.', ',')}</div>
                    </div>
                    <i class="fa-solid fa-trash" style="color:#e74c3c; cursor:pointer;" onclick="removeFromCart(${index})"></i>
                </div>
            `).join('');
        }
    }

    if (cartTotal) {
        const total = cart.reduce((acc, item) => acc + Number(item.price), 0);
        cartTotal.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function toggleCartModal(forceOpen = false) {
    const modal = document.getElementById("cartModal");
    if (!modal) return;
    if (forceOpen) {
        modal.style.display = "flex";
    } else {
        modal.style.display = modal.style.display === "flex" ? "none" : "flex";
    }
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let text = "Olá, gostaria de finalizar meu pedido na DROP STORE:\n\n";
    cart.forEach(item => {
        text += `- ${item.name} (R$ ${Number(item.price).toFixed(2).replace('.', ',')})\n`;
    });

    const total = cart.reduce((acc, item) => acc + Number(item.price), 0);
    text += `\n*Total: R$ ${total.toFixed(2).replace('.', ',')}*`;

    const phone = "5511998765432"; // Altere para seu WhatsApp
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
}

// Menu Mobile
function toggleMobileMenu() {
    const menu = document.getElementById("navMenu");
    if (menu) menu.classList.toggle("show");
}

function closeMobileMenu() {
    const menu = document.getElementById("navMenu");
    if (menu) menu.classList.remove("show");
}