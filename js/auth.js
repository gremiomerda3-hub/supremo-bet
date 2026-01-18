const ADMIN = {
  user: "Gremiis",
  pass: "Sintia1404+"
};

function login() {
  const u = document.getElementById("user").value.trim();
  const p = document.getElementById("pass").value.trim();

  if (u === ADMIN.user && p === ADMIN.pass) {
    localStorage.setItem("admin", "true");
    window.location.href = "admin.html";
  } else {
    alert("Acesso negado");
  }
}
