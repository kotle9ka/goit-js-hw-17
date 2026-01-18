import ApiService from "./js/function.js";
import fotoTemplate from "./templates/fotocard.hbs";

const refs = {
  searchForm: document.querySelector(".js-search-form"),
  articlesContainer: document.querySelector(".js-articles-container"),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const apiService = new ApiService();

refs.searchForm.addEventListener("submit", onSearchSubmit);
refs.loadMoreBtn.addEventListener("click", onLoadMoreClick);

function onSearchSubmit(event) {
  event.preventDefault();

  apiService.query = event.currentTarget.elements.query.value.trim();
  if (!apiService.query) return;

  apiService.reset();
  clearArticleContainer();

  apiService.fetchArticles().then(addArticlesMarkup);
}

function onLoadMoreClick() {
  apiService.fetchArticles().then(addArticlesMarkup);
}

function addArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML(
    "beforeend",
    fotoTemplate(articles)
  );
}

function clearArticleContainer() {
  refs.articlesContainer.innerHTML = "";
}
