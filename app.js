let amigos = [];

function adicionarAmigo() {
  let nome = document.getElementById("amigo").value;
  if (nome == "") {
    alert("esse campo nao pode ser vazio");
    return;
  }
  amigos.push(nome);
  limparCampo();
  mostrarAmigos();
}

function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length == 0) {
    alert("escreva os nomes dos amigos");
    return;
  }
  let sorteio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[sorteio];
  let resultado = document.getElementById("resultado");
  resultado.innerText = amigoSorteado;
}

function limparCampo() {
  let nome = document.querySelector("input");
  nome.value = "";
}
