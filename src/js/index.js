import "../scss/style.scss";
import { getNews, getInfo } from "./api";



function formattedTime(timestamp) {
  let date = new Date(timestamp * 1000).toLocaleString();
  return date
}

let flag = 0;
async function loadTenNews() {
  //let tenArticles = []; //to load all articles together
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
    //tenArticles.push(article); //to load all articles together
    insertArticle(article);
    flag += 1;
  }
  //insertTenArticles(tenArticles); //to load all articles together
}


/* //to load all articles together
function insertTenArticles(articles) {
  for (let i = 0; i < articles.length; i++) {
    const article = document.getElementById('news');
    const myArticle = document.createElement('article');
    myArticle.innerHTML = `<h3>${articles[i].title}</h3><p>${articles[i].time}</p><a href="${articles[i].link}" target="_blank">Open the article</a>`;
    article.appendChild(myArticle);
  }
}
*/

function insertArticle(obj) { 
  const article = document.getElementById('news');
  const myArticle = document.createElement('article');
  myArticle.innerHTML = `<h3>${obj.title}</h3><p>${obj.time}</p><a href="${obj.link}" target="_blank">Open the article</a>`;
  article.appendChild(myArticle);
}


const btn = document.getElementById("load-more");
btn.addEventListener("click", loadTenNews);

loadTenNews();


