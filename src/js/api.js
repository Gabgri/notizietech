import axios from 'axios';

const hackerUrl = process.env.API_HACKER;

export async function getNews() {
    let hackerAll = new URL("v0/newstories.json", hackerUrl);
    try {
        const response = await axios.get(hackerAll);
        const news = await response.data;
        return news;
      } catch (error) {
        console.error(error);
      }
}

export async function getInfo(id) {
    let hackerId = new URL(`v0/item/${id}.json`, hackerUrl);
    try {
        const response = await axios.get(hackerId);
        const info = await response.data;
        return info;
      } catch (error) {
        console.error(error);
      }
}

