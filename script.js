const container = document.getElementById("newscontainer");

function displayNews(data) {
    container.innerHTML ="";

    data.forEach(news => {
        const card = document.createElement("div");
        card.classList.add("news-card");

        card.innerHTML = `
        <img src="${news.urlToImage}" alt="">
        <h2>${news.title}</h2>
        <p>${news.description || "لايوجد وصف"}</p>
        <button onclick="window.open('${news.url}')">اقرأ المزيد</button>
        `;

        container.appendChild(card);
    });
}

async function getNews() {
const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apikey=e5bf650362f64304a41ec16b51903671");

const data = await response.json();

displayNews(data.articles);
}

getNews();
