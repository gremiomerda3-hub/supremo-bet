function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if (u === "Gremiis" && p === "Sintia1404+") {
    localStorage.setItem("logado", "true");
    window.location.href = "home.html";
  } else {
    alert("Login inválido");
  }
}
