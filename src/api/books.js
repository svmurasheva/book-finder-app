import booksMockResponse from "./mock/mock-api-response.json"

const url = "https://www.googleapis.com/books/v1/volumes";

const fetchBooksByQuery = async (query, pageSize, pageNum) => {
   try { 
        console.log("fetchBooksByQuery, query:", query);
        const response = await fetch(`${url}?${buildQueryParams(query, pageSize, pageNum)}`);
        if (response.ok) {
            const books = (await response.json())?.items;
            return books ? books : [];
        } else {
            return returnMockData(query, pageSize, startIndex);
        }
    } catch(err) {
        console.error("Error when calling book API: ", err);
        console.log("Returning mock response instead");
        return returnMockData(query, pageSize, startIndex);
    }
}

const fetchBooksByIds = async (ids) => {
    console.log("fetchBooksByIds, ids:", ids);
    return Promise.all(ids.map(fetchBookById));
}

const fetchBookById = async (id) => {
    const response = await fetch(`${url}/${id}`);
    return response.json();
}

const buildQueryParams = (query, pageSize, pageNum) => {
    // intitle:${query}+inauthor:${query}+subject:${query}
    const urlSearchParams = new URLSearchParams({
        q: `${query ? query : "''"}`,
        startIndex: (pageNum - 1) * pageSize,
        maxResults: pageSize
    });
    return urlSearchParams.toString();``
}

const returnMockData = (query, pageSize, pageNum) => {
    let books = booksMockResponse.items;
  
    const filteredBooks = books.filter((book) => {
      const titleMatch = book.volumeInfo.title?.toLowerCase().includes(query.toLowerCase());
      const subtitleMatch = book.volumeInfo.subtitle?.toLowerCase().includes(query.toLowerCase());
      const authorsMatch = book.volumeInfo.authors?.some(author => author.toLowerCase().includes(query.toLowerCase()));
      const categoriesMatch = book.volumeInfo.categories?.some(category => category.toLowerCase().includes(query.toLowerCase()));
  
      return titleMatch || subtitleMatch || authorsMatch || categoriesMatch;
    });
  
    const startIndex = pageNum * pageSize;
    const endIndex = startIndex + pageSize;

    books = filteredBooks.length > 0 ? filteredBooks : books;
  
    return books.slice(startIndex, endIndex);
  };

export { fetchBooksByQuery, fetchBooksByIds };