import "../scss/style.scss";
import { getNews, getInfo } from "./api";

let flag = 0;
async function loadTenNews() {
  let listId = await getNews();
  let tenId = listId.slice(flag, flag+10);
  for (let i = 0; i < tenId.length; i++) {
    let infoId = await getInfo(tenId[i]);
    let article = {
      title: infoId.title,
      link: infoId.url,
      time: infoId.time,
    }
    insertArticle(article);
    flag += 1;
  }
}

function insertArticle(obj) { 
  const article = document.getElementById('news');
  const myArticle = document.createElement('article');
  myArticle.innerHTML = `<h3>${obj.title}</h3><a href="${obj.link}" target="_blank">${obj.link}</a><p>${obj.time}</p>`;
  article.appendChild(myArticle);
}

const btn = document.getElementById("load-more");
btn.addEventListener("click", loadTenNews);

loadTenNews();


