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
            returnMockData(query, pageSize, pageNum);
        }
    } catch(err) {
        console.error("Error when calling book API: ", err);
        console.log("Returning mock response instead");
        return returnMockData(query);
    }
}

const buildQueryParams = (query, pageSize, pageNum) => {
    // intitle:${query}+inauthor:${query}+subject:${query}
    const urlSearchParams = new URLSearchParams({
        q: `${query ? query : "''"}`,
        startIndex: pageNum,
        maxResults: pageSize
    });
    return urlSearchParams.toString();
}

const returnMockData = (query, pageSize, pageNum) => {
    return booksMockResponse.items;
}

export { fetchBooksByQuery };