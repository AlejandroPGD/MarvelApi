import { GET_ALL_CHARACTERS, GET_ALL_MOVIES, GET_CHARACTERS_MOVIE, SET_CHARACTERS_DETAILS, GET_MOVIES_CHARACTER, LOADING } from "../actions";

const initialState = {
    allMovies: [],
    allCharacters: [],
    charactersMovie: [],
    charactersDetails: [],
    moviesCharacter: [],
    loading: false,
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                allCharacters: state.allCharacters.concat(payload),
            }
        case GET_ALL_MOVIES:
            return {
                ...state,
                allMovies: payload,
            }
        case GET_CHARACTERS_MOVIE:
            return {
                ...state,
                charactersMovie: payload,
            }
        case SET_CHARACTERS_DETAILS:

            return {
                ...state,
                charactersDetails: payload,
            }
        case GET_MOVIES_CHARACTER:
            return {
                ...state,
                moviesCharacter: [],
            }
        case LOADING:
            return {
                ...state,
                loading: payload,
            }
        default:
            return state;
    }
}