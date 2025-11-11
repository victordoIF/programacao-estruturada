const fs = require('fs');
const arquivo = 'estoque.json';

let estoque = [];

if (fs.existsSync(arquivo)) {
  const conteudo = fs.readFileSync(arquivo, 'utf-8');
  estoque = JSON.parse(conteudo);
} else {
  console.log("Arquivo não encontrado. Criando novo...");
}

if (estoque.length === 0) {
  estoque = [
    { nome: "Notebook", quantidade: 5 },
    { nome: "Mouse", quantidade: 10 },
    { nome: "Teclado", quantidade: 8 }
  ];
  console.log("🆕 Estoque inicial criado.");
}

estoque = estoque.map(produto => {
  if (produto.nome === "Notebook" && produto.quantidade > 0) {
    produto.quantidade -= 1;
  }
  return produto;
});

fs.writeFileSync(arquivo, JSON.stringify(estoque, null, 2));

console.log("✅ Estoque atualizado!");
console.table(estoque);
