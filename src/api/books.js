import booksMockResponse from "./mock/mock-api-response.json"

const fetchBooks = async () => {
    return booksMockResponse.items;
}

export { fetchBooks };