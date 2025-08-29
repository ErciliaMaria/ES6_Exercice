const alunosMedia = [
  { nome: "Aluno 1", nota: 7.5 },
  { nome: "Aluno 2", nota: 8.0 },
  { nome: "Aluno 3", nota: 6.2 },
  { nome: "Aluno 4", nota: 9.1 },
  { nome: "Aluno 5", nota: 5.8 },
  { nome: "Aluno 6", nota: 7.0 },
  { nome: "Aluno 7", nota: 4.9 },
  { nome: "Aluno 8", nota: 8.5 },
  { nome: "Aluno 9", nota: 6.7 },
  { nome: "Aluno 10", nota: 9.3 },
  { nome: "Aluno 11", nota: 7.4 },
  { nome: "Aluno 12", nota: 5.5 },
  { nome: "Aluno 13", nota: 6.9 },
  { nome: "Aluno 14", nota: 8.2 },
  { nome: "Aluno 15", nota: 7.8 },
  { nome: "Aluno 16", nota: 9.0 },
  { nome: "Aluno 17", nota: 4.5 },
  { nome: "Aluno 18", nota: 6.0 },
  { nome: "Aluno 19", nota: 8.7 },
  { nome: "Aluno 20", nota: 7.2 },
  { nome: "Aluno 21", nota: 5.9 },
  { nome: "Aluno 22", nota: 6.8 },
  { nome: "Aluno 23", nota: 7.1 },
  { nome: "Aluno 24", nota: 9.5 },
  { nome: "Aluno 25", nota: 8.3 },
  { nome: "Aluno 26", nota: 6.4 },
  { nome: "Aluno 27", nota: 5.0 },
  { nome: "Aluno 28", nota: 7.9 },
  { nome: "Aluno 29", nota: 8.9 },
  { nome: "Aluno 30", nota: 6.6 }
];
let nomesAprovados = alunosMedia
    .filter(aluno => aluno.nota >= 6)
    .map(aluno => aluno.nome)

console.log("Alunos aprovados:", nomesAprovados);