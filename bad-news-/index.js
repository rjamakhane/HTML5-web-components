import { topHeadlinesUrl } from './newsAPI.js';
import './news-article.js';
window.addEventListener('load', () => {
    console.log(1);
    fetchNews();
});

async function fetchNews() {
    let response = await fetch(topHeadlinesUrl);
    let data = await response.json();
    const main = document.querySelector('main');

    data.articles.forEach(article => {
        console.log(article);
        const el = document.createElement('news-article');
        el.article = article;
        main.appendChild(el);
    });
}
