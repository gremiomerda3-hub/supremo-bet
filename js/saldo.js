let saldo = Number(localStorage.getItem("saldo")) || 1000;

function atualizar() {
  document.getElementById("saldo").innerText = saldo;
  localStorage.setItem("saldo", saldo);
}

function apostar() {
  saldo -= 100;
  if (Math.random() < 0.45) saldo += 180;
  atualizar();
}

atualizar();
