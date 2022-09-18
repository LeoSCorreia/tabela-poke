var ash = { nome: "Ash", vitorias: 1, empates: 0, derrotas: 0, pontos: 0 };
var may = { nome: "May", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}
var resultadosDosPontos = calcularPontos(ash);

var jogadores = [ash, may];

function exibeJogadores(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria()'>Vitória</button></td>";
    elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota()'>Derrota</button></td>";
    elemento += "</tr>";
  }
}
