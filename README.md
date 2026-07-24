# ⚡ AURA STREETWEAR | E-Commerce High-End

<p align="center">
  <b>Plataforma de e-commerce de moda urbana desenvolvida com foco em alta conversão, galeria interativa de produtos, gestão de coleções e Painel Administrativo com upload de imagens.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge">
  <img src="https://img.shields.io/badge/HTML5-E54C21?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</p>

<!-- BOTÃO LIVE DEMO -->
<p align="center">
  <a href="https://riollymikael.github.io/loja-streetwear-premium/">
    <img src="https://img.shields.io/badge/🚀_Ver_Demonstração_Online-e5b869?style=for-the-badge&logoColor=black&color=e5b869" alt="Ver Demo">
  </a>
</p>

<!-- PREVIEW DO SITE -->
<p align="center">
  <img src="images/preview.png" alt="Preview AURA Streetwear" width="100%" style="border-radius: 8px;">
</p>

---

## 📋 Sobre o Projeto

O **AURA STREETWEAR** é uma plataforma de e-commerce completa em Dark Mode voltada para marcas de roupas e moda urbana de alto padrão. O sistema possui catálogo inicial com 15 produtos, página individual de detalhes com carrossel dinâmico (troca automática a cada 5s e seleção manual de miniaturas), seletor de tamanhos e **Painel Administrativo avançado** que permite cadastrar novas coleções e anexar fotos locais do computador.

---

## ✨ Principais Funcionalidades

* **Página de Detalhes do Produto (`detalhes.html`):**
  * Carrossel de fotos automático que alterna a cada 5 segundos.
  * Seleção manual por miniaturas de fotos clicáveis.
  * Escolha de tamanhos (P, M, G, GG para vestuário e 38 a 43 para calçados).
  * Exibição de descrição detalhada e preço com desconto.
* **Painel Administrativo Completo (`admin.html`):**
  * **Criador de Coleções:** Permite cadastrar e remover novas coleções/categorias em tempo real.
  * **Upload de Múltiplas Fotos:** Anexo direto de arquivos do computador convertidos em Base64 para persistência no `localStorage`.
  * **Cadastro de Descrição e Tags:** Inclusão de textos detalhados por produto.
* **Carrinho de Compras Interativo & WhatsApp:**
  * Painel lateral dinâmico que salva os itens selecionados e permite o envio formatado do pedido via WhatsApp.
* **Design Dark Mode Responsivo:** Experiência fluida para desktop, tablets e celulares.

---

## 🗂️ Estrutura do Projeto

```text
LOJA-STREETWEAR-PREMIUM/
│
├── css/
│   └── style.css
│
├── js/
│   ├── products.js
│   ├── app.js
│   ├── detalhes.js
│   └── admin.js
│
├── index.html
├── detalhes.html
├── admin.html
└── README.md