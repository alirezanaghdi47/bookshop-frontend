import * as t from './../actionType';

const initialState = {
    books: {
        data: [],
        count: 0,
        isLoading: false
    },
    book: {
        data: {},
        isLoading: false
    },
    publishedBooks: {
        data: [],
        count: 0,
        isLoading: false
    },
    publishedBook: {
        data: {},
        isLoading: false
    },
    discountedBooks: {
        data: [],
        count: 0,
        isLoading: false
    },
    newestBooks: {
        data: [],
        count: 0,
        isLoading: false
    }
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.GET_BOOKS:
            return {
                ...state,
                books: {
                    ...state.books,
                    isLoading: true
                }
            };
        case t.SET_BOOKS:
            return {
                ...state,
                books: {
                    ...state.books,
                    data: action.payload.data,
                    count: action.payload.count,
                    isLoading: false
                }
            };
        case t.GET_BOOK:
            return {
                ...state,
                book: {
                    ...state.book,
                    isLoading: true
                }
            };
        case t.SET_BOOK:
            return {
                ...state,
                book: {
                    data: action.payload,
                    isLoading: false
                }
            };
        case t.GET_PUBLISHED_BOOKS:
            return {
                ...state,
                publishedBooks: {
                    ...state.publishedBooks,
                    isLoading: true
                }
            };
        case t.SET_PUBLISHED_BOOKS:
            return {
                ...state,
                publishedBooks: {
                    data: action.payload.data,
                    count: action.payload.count,
                    isLoading: false
                }
            };
        case t.GET_PUBLISHED_BOOK:
            return {
                ...state,
                publishedBook: {
                    ...state.book,
                    isLoading: true
                }
            };
        case t.SET_PUBLISHED_BOOK:
            return {
                ...state,
                publishedBook: {
                    data: action.payload,
                    isLoading: false
                }
            };
        case t.GET_DISCOUNTED_BOOKS:
            return {
                ...state,
                discountedBooks: {
                    ...state.discountedBooks,
                    isLoading: true
                }
            };
        case t.SET_DISCOUNTED_BOOKS:
            return {
                ...state,
                discountedBooks: {
                    data: action.payload.data,
                    count: action.payload.count,
                    isLoading: false
                }
            };
        case t.GET_NEWEST_BOOKS:
            return {
                ...state,
                newestBooks: {
                    ...state.newestBooks,
                    isLoading: true
                }
            };
        case t.SET_NEWEST_BOOKS:
            return {
                ...state,
                newestBooks: {
                    data: action.payload.data,
                    count: action.payload.count,
                    isLoading: false
                }
            };
        default:
            return state;
    }
};

export default bookReducer;
