import "../scss/style.scss";
import { getNews, getInfo } from "./api";

function formattedTime(timestamp) {
  let date = new Date(timestamp * 1000).toLocaleString();
  return date
}

let flag = 0;
async function loadTenNews() {
  let tenArticles = [];
  let listId = await getNews();
  let tenId = listId.slice(flag, flag+10);
  for (let i = 0; i < tenId.length; i++) {
    let infoId = await getInfo(tenId[i]);
    let articleDate = formattedTime(infoId.time);
    let article = {
      title: infoId.title,
      link: infoId.url,
      time: articleDate,
    }
    tenArticles.push(article);
    //insertArticle(article);
    flag += 1;
  }
  insertTenArticles(tenArticles);
}

function insertTenArticles(articles) {
  for (let i = 0; i < articles.length; i++) {
    const article = document.getElementById('news');
    const myArticle = document.createElement('article');
    myArticle.innerHTML = `<h3>${articles[i].title}</h3><a href="${articles[i].link}" target="_blank">Open the article</a><p>${articles[i].time}</p>`;
    article.appendChild(myArticle);
  }
}

/*
function insertArticle(obj) { 
  const article = document.getElementById('news');
  const myArticle = document.createElement('article');
  myArticle.innerHTML = `<h3>${obj.title}</h3><a href="${obj.link}" target="_blank">Open the article</a><p>${obj.time}</p>`;
  article.appendChild(myArticle);
}
*/

const btn = document.getElementById("load-more");
btn.addEventListener("click", loadTenNews);

loadTenNews();


