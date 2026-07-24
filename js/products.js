const defaultProducts = [
    {
        id: 1,
        name: "Camiseta Oversized Heavy Dark",
        price: 149.90,
        oldPrice: 189.90,
        category: "camisas",
        tag: "Lançamento",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=500",
        description: "Camiseta desenvolvida em malha pesada 100% algodão premium 260g. Modelagem oversized autêntica, gola de 3cm rebatedora e caimento impecável."
    },
    {
        id: 2,
        name: "Tênis Streetwear Urban Black",
        price: 399.90,
        oldPrice: 459.90,
        category: "tenis",
        tag: "Destaque",
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=500",
        description: "Design futurista e robusto. Cabedal sintético de alta resistência com inserções em mesh respirável. Solado em borracha vulcanizada antiderrapante."
    },
    {
        id: 3,
        name: "Calça Cargo Tactical Black",
        price: 229.90,
        oldPrice: 279.90,
        category: "calcas",
        tag: "Mais Vendido",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=500",
        description: "Calça estilo utilitário produzida em ripstop ultra resistente. Possui 6 bolsos funcionais, ajuste na barra com cordão e cintura elástica."
    },
    {
        id: 4,
        name: "Moletom Hoodie Gothic Drop",
        price: 289.90,
        oldPrice: 329.90,
        category: "camisas",
        tag: "Edição Limitada",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=500",
        description: "Moletom 3 cabos flanelado de alto gramatura. Capuz duplo estruturado, bolso canguru e bordado de alta densidade no peito."
    }
];

// Carrega os produtos salvos no LocalStorage pelo Admin ou usa os padrão
function getProducts() {
    const stored = localStorage.getItem("dropstore_products");
    if (!stored) {
        localStorage.setItem("dropstore_products", JSON.stringify(defaultProducts));
        return defaultProducts;
    }
    return JSON.parse(stored);
}