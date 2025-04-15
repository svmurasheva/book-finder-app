import { LIKED_BOOKS_LOCAL_STORAGE_KEY } from "../config/constants";

const getLikedBookIds = () => JSON.parse(localStorage.getItem(LIKED_BOOKS_LOCAL_STORAGE_KEY) ?? "[]");

const storeLikedBooksIds = (likedBooks) => localStorage.setItem(LIKED_BOOKS_LOCAL_STORAGE_KEY, JSON.stringify(likedBooks));

const removeLikedBookId = (id) => {
    const filteredIds = getLikedBookIds().filter((i) => i !== id);
    storeLikedBooksIds(filteredIds);
};

const addLikedBookId = (id) => {
    const likedBooks = [id, ...getLikedBookIds()];
    storeLikedBooksIds(likedBooks);
};

const isLikedBookId = (id) => getLikedBookIds().includes(id);

export { getLikedBookIds, storeLikedBooksIds, removeLikedBookId, addLikedBookId, isLikedBookId } 