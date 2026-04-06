const container = document.getElementById("newscontainer");

function displayNews (articles) {
    if (!articles) return;

    container.innerHTML ="";

    articles.forEach(article => {
        const card = document.createElement("div");
        card.classList.add("news-card");

        card.innerHTML = `
        <img src="${article.urlToImage}" alt="">
        <h2>${article.title}</h2>
        <p>${article.description || "لايوجد وصف"}</p>
        <button onclick="window.open('${article.url}')">اقرأ المزيد</button>
        `;

        container.appendChild(card);
    });
}

async function getNews() {
const url = `https://api.allorigins.win/raw?url=https://newsapi.org/v2/top-headlines?country=us&apiKey=e5bf650362f64304a41ec16b51903671`;

try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.articles) {
        console.log("API error:", data);
        return;
    }
    displayNews(data.articles);

} catch (error) {
    console.log("Error:", error);
}
}
getNews();


