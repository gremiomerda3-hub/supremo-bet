let saldo = Number(localStorage.getItem("saldo"));

function slot() {
  saldo -= 50;
  if (Math.random() < 0.3) saldo += 300;
  localStorage.setItem("saldo", saldo);
  alert("Saldo atual: " + saldo);
}
