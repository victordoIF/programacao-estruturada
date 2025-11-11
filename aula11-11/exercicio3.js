const fs = require('fs');
const arquivo = 'alunos.json';

let alunos = [];

if (fs.existsSync(arquivo)) {
  const conteudo = fs.readFileSync(arquivo, 'utf-8');
  alunos = JSON.parse(conteudo);
} else {
  console.log("Arquivo não encontrado. Criando novo...");
}

if (alunos.length === 0) {
  alunos = [
    { nome: "Pedro", notas: [10, 9, 8] },
    { nome: "Paulo", notas: [8, 9, 10] },
    { nome: "Judas", notas: [10, 5, 2] }
  ];
  console.log("🆕 Estoque inicial criado.");
}

alunos = alunos.map(aluno => {
  const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
  const media = soma / aluno.notas.length;
  return { ...aluno, media: media.toFixed(2) };
});

fs.writeFileSync(arquivo, JSON.stringify(alunos, null, 2));

console.log("✅ Médias calculadas e salvas!");
console.table(alunos);
