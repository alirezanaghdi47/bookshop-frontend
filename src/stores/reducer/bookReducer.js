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
    relativeBooks: {
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
        case t.GET_RELATIVE_BOOKS:
            return {
                ...state,
                relativeBooks: {
                    ...state.relativeBooks,
                    isLoading: true
                }
            };
        case t.SET_RELATIVE_BOOKS:
            return {
                ...state,
                relativeBooks: {
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
