function getArticleGenerator(articles) {
    const content = document.querySelector('#content');

    return function () {
        if (articles.length > 0) {
            const article = document.createElement('article');
            article.textContent = articles.shift();
            content.appendChild(article);
        }
    }
}