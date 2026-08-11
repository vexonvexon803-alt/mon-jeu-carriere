// Variables de départ
let money = 1000;
let reputation = 10;

// Fonction pour mettre à jour l'affichage sur l'écran
function updateStats() {
    document.getElementById("stat-money").innerText = money;
    document.getElementById("stat-reputation").innerText = reputation;
}

// Fonction gérant les choix du joueur
function faireChoix(type) {
    let storyText = document.getElementById("text-story");

    if (type === 'entrainement') {
        reputation += 5;
        money -= 50;
        storyText.innerHTML = "<p>Tu as passé des heures à t'entraîner intensément. Ta cote monte, mais ta session t'a coûté un peu d'argent en frais divers.</p>";
    } else if (type === 'travailler') {
        money += 200;
        reputation -= 2;
        storyText.innerHTML = "<p>Tu as fait des heures supplémentaires. Ton compte en banque sourit, mais tu as moins de temps pour ta discipline principale.</p>";
    }

    updateStats();
}
