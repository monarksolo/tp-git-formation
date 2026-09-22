// Formulaire de connexion
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (!username || !password) {
    console.log("Veuillez saisir vos identifiants");
    return false;
  }
  console.log("Connexion de " + username);
  return true;
}
