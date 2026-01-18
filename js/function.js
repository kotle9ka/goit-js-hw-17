const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "54253404-642d08b4e9274d1de4d38485e";

export default class ApiService {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
    this.perPage = 10;
  }

  fetchArticles() {
    const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&editors_choice=true&per_page=${this.perPage}&page=${this.page}`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();
        return data.hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  reset() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
