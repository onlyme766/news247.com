const banglaNews = document.getElementById("bangla-news");
const englishNews = document.getElementById("english-news");

fetch("https://your-project-id.firebaseio.com/news.json")
  .then(res => res.json())
  .then(data => {
    banglaNews.innerHTML = data.bangla || "<p>Static Bangla news fallback.</p>";
    englishNews.innerHTML = data.english || "<p>Static English news fallback.</p>";
  })
  .catch(() => {
    banglaNews.innerHTML = "<p>Static Bangla news fallback.</p>";
    englishNews.innerHTML = "<p>Static English news fallback.</p>";
  });
