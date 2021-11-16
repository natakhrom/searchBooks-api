class BooksApi {
    constructor({ baseUrl, apiKey}) {
        this._baseUrl = baseUrl;
        this._apiKey = apiKey;
    } 

    getBooks(query, category, startIndex, maxResult) {
        const categoryParam = category === 'all'
            ? '' : `+subject:${category}`;    

        const url = `${this._baseUrl}/v1/volumes?q=${query}${categoryParam}&startIndex=${startIndex}&maxResults=${maxResult}&key=${this._apiKey}`;


        return fetch(url)
            .then(res => {
                if(res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
}

const api = new BooksApi({
    baseUrl: 'https://www.googleapis.com/books',
    apiKey: 'AIzaSyDOLzKhavchXJwQxGwzn9ssVWn0R8IQicE',
})

export default api;
