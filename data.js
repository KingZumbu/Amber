// Dados dos produtos Amber
const produtos = [
    // Perfumes Masculinos - Normal
    { nome: "Kayak", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft1.jpg" },
    { nome: "Bvlgari", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft2.jpg" },
    { nome: "Scandal Homme", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft3.jpg" },
    { nome: "Hugo Boss", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft4.jpg" },
    { nome: "Polo Black", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft5.jpg" },
    { nome: "One Million", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft6.jpg" },
    { nome: "Essencial", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft7.jpg" },
    { nome: "Calvin Klein", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft8.jpg" },
    { nome: "Drakar Noir", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft9.jpg" },
    { nome: "Diesel Fuel", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft10.jpg" },
    { nome: "Cool Water", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft11.jpg" },
    { nome: "Ferrari Black", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft12.jpg" },
    { nome: "Paco Rabanne", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft13.jpg" },
    { nome: "212 - Sexy, Heroes, Vip", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft14.jpg" },
    { nome: "Animale", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft15.jpg" },
    { nome: "My Way", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/sem foto.jpg" },
    { nome: "Dolce Gabbana", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft17.jpg" },
    { nome: "Armani", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft18.jpg" },
    { nome: "Azarro", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft19.jpg" },
    { nome: "Mont Blanc", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft20.jpg" },
    { nome: "Conexion", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft21.jpg" },
    { nome: "Silver Scent", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft22.jpg" },
    { nome: "Insensatez", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft23.jpg" },
    { nome: "Bad Boy", sexo: "masculino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft24.jpg" },
    
    // Perfumes Masculinos - Especial
    { nome: "Invictus", sexo: "masculino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft25.jpg" },
    { nome: "Creed Aventus", sexo: "masculino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft26.jpg" },
    { nome: "Bvlgari Black", sexo: "masculino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft27.jpg" },
    { nome: "Bacarah", sexo: "masculino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft28.jpg" },
    { nome: "Sauvage", sexo: "masculino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft29.jpg" },
    { nome: "Malbec Noir", sexo: "masculino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft30.jpg" },
    { nome: "Bleu Chanel", sexo: "masculino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft31.jpg" },
    { nome: "Jean Paul Galtier", sexo: "masculino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft32.jpg" },
    { nome: "Lancaster", sexo: "masculino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft33.jpg" },
    { nome: "Mandarino", sexo: "masculino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft34.jpg" },
    
    // Perfumes Femininos - Normal
    { nome: "Scandal", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft35.jpg" },
    { nome: "Angel", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft36.jpg" },
    { nome: "Chloe", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft37.jpg" },
    { nome: "Egeo Dolce", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft38.jpg" },
    { nome: "Olympea", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft39.jpg" },
    { nome: "Florata Blue", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft40.jpg" },
    { nome: "CK One", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft41.jpg" },
    { nome: "Hypnotic Poison", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft42.jpg" },
    { nome: "Chanel 5", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft43.jpg" },
    { nome: "Absinto", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft44.jpg" },
    { nome: "Opium", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft45.jpg" },
    { nome: "Lili", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/sem foto.jpg" },
    { nome: "Jadore", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft47.jpg" },
    { nome: "212 - Sexy, Heroes, Vip", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft48.jpg" },
    { nome: "Bvlgari", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft49.jpg" },
    { nome: "Amor Amor", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft50.jpg" },
    { nome: "Dolce Gabbana", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft51.jpg" },
    { nome: "Armani", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft52.jpg" },
    { nome: "Lou Lou", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft53.jpg" },
    { nome: "Flower by Kenzo", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft54.jpg" },
    { nome: "La Vie est Belle", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft55.jpg" },
    { nome: "Gabriela Sabatine", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft56.jpg" },
    { nome: "Euphoria", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft57.jpg" },
    { nome: "Coco Mademoiselle", sexo: "feminino", tipo: "normal", preco100ml: 119.90, preco50ml: 69.90, imagem: "./assets/imgs/ft58.jpg" },
    
    // Perfumes Femininos - Especial
    { nome: "Dior Joy", sexo: "feminino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft59.jpg" },
    { nome: "Scandal by Night", sexo: "feminino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/sem foto.jpg" },
    { nome: "Good Girl CH", sexo: "feminino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft61.jpg" },
    { nome: "Haya Lattafa", sexo: "feminino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft62.jpg" },
    { nome: "Ameerat al Arab Rose", sexo: "feminino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft63.jpg" },
    { nome: "Vezzo", sexo: "feminino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft64.jpg" },
    { nome: "Al Wataniah Shagaf", sexo: "feminino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft65.jpg" },
    { nome: "Jo Malone", sexo: "feminino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft66.jpg" },
    { nome: "Pegasus de Marly", sexo: "feminino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft67.jpg" },
    { nome: "Miss Dior", sexo: "feminino", tipo: "especial", preco100ml: 139.90, preco50ml: 79.90, imagem: "./assets/imgs/ft68.jpg" }
];

// Número do WhatsApp para vendas
const whatsappNumber = "5524993106425";

// Função para filtrar produtos por sexo
function filtrarPorSexo(sexo) {
    return produtos.filter(produto => produto.sexo === sexo);
}

// Função para filtrar produtos por tipo
function filtrarPorTipo(tipo) {
    return produtos.filter(produto => produto.tipo === tipo);
}

// Função para buscar produtos por nome
function buscarProdutos(termo) {
    const termoBusca = termo.toLowerCase();
    return produtos.filter(produto => 
        produto.nome.toLowerCase().includes(termoBusca)
    );
}
