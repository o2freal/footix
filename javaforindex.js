// Récupérer la barre de recherche et les articles
const searchBar = document.getElementById('search-bar');
const articles = document.querySelectorAll('.article');

// Ajouter un écouteur d'événement pour détecter la saisie dans la barre de recherche
searchBar.addEventListener('input', function() {
    const query = searchBar.value.toLowerCase(); // Récupérer la valeur de recherche en minuscule

    // Parcourir chaque article
    articles.forEach(article => {
        const title = article.querySelector('.article-title').textContent.toLowerCase(); // Récupérer le titre de l'article en minuscule

        // Si le titre de l'article contient la valeur de la recherche
        if (title.includes(query)) {
            article.classList.remove('hidden'); // Afficher l'article
        } else {
            article.classList.add('hidden'); // Masquer l'article
        }
    });
});
