/*
1-chiedi all’utente il suo nome
    -prompt
2-poi chiedi il suo cognome
    -prompt
3-poi chiedi il suo colore preferito
    -prompt
4-scrivi sulla pagina nomecognomecolorepreferito21
    -document.getElementById
*/

let name1 = prompt('Qual è il tuo nome?');
let surname = prompt ('Qual è il tuo cognome?');
let color = prompt ('Qual è il tuo colore preferito?');

document.getElementById ('password').innerHTML = `<p>${name1}${surname}${color}21</p>`

