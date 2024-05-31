import "../scss/style.scss";
import { getNews, getInfo } from "./api";

getNews();
getInfo(1);

/*

loadTenNews();

const btn = document.querySelector(".load-more");
btn.addEventListener("click", loadTenNews);

let flag = 0;
async function loadTenNews() {
  let listId = await getNewsId();
  let tenId = listId.slice(flag, flag+10);
  for (let i = 0; i < tenId.length; i++) {
    let infoId = await getInfoId(tenId[i]);
    let article = {
      title: infoId.title,
      link: infoId.url,
      time: infoId.time,
    }
    insertArticle(article);
    flag += 1;
  }
}

// HackerNews API - All id 
async function getNewsId() {
    const request = 'https://hacker-news.firebaseio.com/v0/newstories.json';
    const response = await fetch(request);
    const id = await response.json();
    return id;
}

// HackerNews API - info 
async function getInfoId(id) {
    const request = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    const response = await fetch(request);
    const infoId = await response.json();
    return infoId;
}

function insertArticle(obj) { 
  const article = document.getElementById('news');
  const myArticle = document.createElement('article');
  myArticle.innerHTML = `<h3>${obj.title}</h3><a href="${obj.link}" target="_blank">${obj.link}</a><p>${obj.time}</p>`;
  article.appendChild(myArticle);
}
*/