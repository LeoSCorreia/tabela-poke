var ash = { nome: "Ash", vitorias: 1, empates: 0, derrotas: 0, pontos: 0 };
var may = { nome: "May", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

var jogadores = [ash, may];

function exibeJogadores(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";

    var tabelaDeJogadores = document.getElementById("tabelaJogadores");
    tabelaDeJogadores.innerHTML = elemento;
  }
}
exibeJogadores(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  exibeJogadores(jogadores);
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calcularPontos(jogador);
  exibeJogadores(jogadores);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadores(jogadores);
}
