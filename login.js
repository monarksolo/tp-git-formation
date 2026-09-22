// Formulaire de connexion
function login() {
  const usr = document.getElementById("username").value;
  const pwd = document.getElementById("password").value;
  if (!usr || !pwd) {
    console.log("Veuillez saisir vos identifiants");
    return false;
  }
  console.log("Connexion de " + usr);
  return true;
}
