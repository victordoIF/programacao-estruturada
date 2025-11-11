const fs = require('fs');
const arquivo = 'produtos.json';

let produtos = [];
if (fs.existsSync(arquivo)) {
  produtos = JSON.parse(fs.readFileSync(arquivo, 'utf-8'));
} else {
  console.log("Arquivo não encontrado. Criando novo...");
}

const novoProduto = {
  nome: "Mouse",
  preco: 79.90
};

produtos.push(novoProduto);

fs.writeFileSync(arquivo, JSON.stringify(produtos, null, 2));

console.log("✅ Produto adicionado com sucesso!");
console.log("📦 Total de produtos cadastrados:", produtos.length);
