import booksMockResponse from "./mock/mock-api-response.json"

const fetchBooks = async () => {
    return booksMockResponse.items;
}

const fetchBooksByQuery = async (query) => {
    console.log('fetchBooksByQuery, query:', query);
    return booksMockResponse.items;
}

export { fetchBooks, fetchBooksByQuery };