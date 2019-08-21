class NewsArticles extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }
    set article(article) {
        this.root.innerHTML = `
            <style>
            img {
                width: 100%;
            }
            </style>
            <a href="${article.url}">
                <h2>${article.title}</h2>
                <img src="${article.urlToImage ? article.urlToImage : ''}">
                <p>${article.description}</p>
            </a>
        `
    }
}

customElements.define('news-article', NewsArticles);