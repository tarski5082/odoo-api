const form = document.getElementById('odooForm');
const output = document.getElementById('output');
const loadBtn = document.getElementById('loadBtn');


form.addEventListener('submit', async (e) => {
e.preventDefault();
loadBtn.disabled = true;


const data = {
url: document.getElementById('url').value.trim(),
db: document.getElementById('db').value.trim(),
user: document.getElementById('user').value.trim(),
password: document.getElementById('password').value
};


// Par défaut : on n'effectue pas d'appel réel ici — on affiche simplement les valeurs.
// Si vous voulez que le bouton appelle l'API Odoo, je peux ajouter un exemple fetch
// (authentification / session / JSON-RPC) selon votre version d'Odoo.


output.style.display = 'block';
output.textContent = JSON.stringify({ action: 'load_products', params: data }, null, 2);


// Simuler fin d'opération
setTimeout(() => {
loadBtn.disabled = false;
}, 600);
});