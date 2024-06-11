import "../scss/style.scss";
import { getNews, getInfo } from "./api";

function formattedTime(timestamp) {
  let date = new Date(timestamp * 1000).toLocaleString();
  return date
}

let bar = 0;
let flag = 0;
async function loadTenNews() {
  bar = 1;
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
    insertArticle(article);
    loadingBar(bar);
    bar += 1;
    flag += 1;
  }
}


function insertArticle(obj) { 
  const article = document.getElementById('news');
  const myArticle = document.createElement('article');
  myArticle.innerHTML = `<h3>${obj.title}</h3><p>${obj.time}</p><a href="${obj.link}" target="_blank">Open</a>`;
  article.appendChild(myArticle);
}

function loadingBar(progress) {
  let progressBar = document.getElementById("progress-bar");
  progressBar.style.width = progress*10+"%";
  }

const btn = document.getElementById("load-more");
btn.addEventListener("click", loadTenNews);

loadTenNews();