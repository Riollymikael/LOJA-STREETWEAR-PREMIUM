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
        description: "Design futurista e robusto. Cabedal sintético de alta resistência com inserções em mesh respirável. Solado em borracha vulcanizada."
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
    },
    {
        id: 5,
        name: "Camiseta Vintage Wash Cyber",
        price: 139.90,
        oldPrice: 169.90,
        category: "camisas",
        tag: "Novo",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500",
        description: "Camiseta com lavagem estonada vintage exclusiva. Malha de algodão macia e estampa silk de alta durabilidade nas costas."
    },
    {
        id: 6,
        name: "Tênis Runner Retro White",
        price: 349.90,
        oldPrice: 399.90,
        category: "tenis",
        tag: "Trend",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500",
        description: "Inspirado no estilo retrô anos 90, combina couro sintético e detalhes refletivos. Palmilha de alta absorção de impacto."
    },
    {
        id: 7,
        name: "Calça Jogger Street Beige",
        price: 199.90,
        oldPrice: 239.90,
        category: "calcas",
        tag: "Básico",
        image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=500",
        description: "Calça jogger em sarja com elastano para maior conforto. Punho em elástico na barra e cordão de ajuste na cintura."
    },
    {
        id: 8,
        name: "Camiseta Longline Acid Grey",
        price: 129.90,
        oldPrice: 159.90,
        category: "camisas",
        tag: "DROP 01",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=500",
        description: "Modelagem longline alongada com corte a fio na barra. Lavagem ácida em tom cinza chumbo."
    },
    {
        id: 9,
        name: "Tênis Chunky Platform Black",
        price: 429.90,
        oldPrice: 499.90,
        category: "tenis",
        tag: "Exclusivo",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500",
        description: "Solado tratorado robusto e visual imponente. Ideal para compor looks conceituais no streetwear."
    },
    {
        id: 10,
        name: "Calça Wide Leg Techwear",
        price: 249.90,
        oldPrice: 299.90,
        category: "calcas",
        tag: "Destaque",
        image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=500",
        description: "Corte amplo e reto estilo Wide Leg com tiras e fivelas táticas nas laterais. Tecido leve e impermeável."
    },
    {
        id: 11,
        name: "Camisa Manga Longa Oversized",
        price: 179.90,
        oldPrice: 219.90,
        category: "camisas",
        tag: "Lançamento",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=500",
        description: "Manga longa em algodão encorpado. Punhos ajustados em ribana e estampa conceitual na manga."
    },
    {
        id: 12,
        name: "Tênis Skate High Top Red",
        price: 379.90,
        oldPrice: 429.90,
        category: "tenis",
        tag: "Clássico",
        image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=500",
        description: "Cano alto clássico reforçado na calcanheira para maior proteção e durabilidade durante o uso."
    },
    {
        id: 13,
        name: "Calça Jeans Destruction Black",
        price: 239.90,
        oldPrice: 289.90,
        category: "calcas",
        tag: "Edição Limitada",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500",
        description: "Jeans premium com rasgos e efeitos destroyed feitos à mão. Modelagem slim com elastano."
    },
    {
        id: 14,
        name: "Regata Oversized Streetwise",
        price: 99.90,
        oldPrice: 129.90,
        category: "camisas",
        tag: "Promoção",
        image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=500",
        description: "Cava larga estilo basquete americana. Excelente opção para dias quentes mantendo o estilo."
    },
    {
        id: 15,
        name: "Calça Parachute Oversized",
        price: 259.90,
        oldPrice: 309.90,
        category: "calcas",
        tag: "Novo",
        image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=500",
        description: "Modelagem parachute bem ampla em náilon super macio. Regulagem no joelho e na barra."
    }
];

function getProducts() {
    const stored = localStorage.getItem("dropstore_products");
    if (!stored) {
        localStorage.setItem("dropstore_products", JSON.stringify(defaultProducts));
        return defaultProducts;
    }
    return JSON.parse(stored);
}