import { useSelector } from 'react-redux';
import films from './films'

export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";
export const GET_ALL_MOVIES = "GET_ALL_MOVIES";
export const GET_CHARACTERS_MOVIE = "GET_CHARACTERS_MOVIE";
export const SET_CHARACTERS_DETAILS = "SET_CHARACTERS_DETAILS";
export const GET_MOVIES_CHARACTER = "GET_MOVIES_CHARACTER";
export const ADD_MOVIE = "ADD_MOVIE";
export const LOADING = "LOADING";


const limit = 100;
let offSet = 0;
let count = 0;
let total = 1;

const apiKey = "ts=1&apikey=867eeaaa4ad1ba517a55671090ffff27&hash=d9c4482af567d0f924b6573fa51dda70"
let urlAll = `https://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offSet}&${apiKey}`;



export function getAllCharacters() {
    return (dispatch) => {
        return fetch(urlAll)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: GET_ALL_CHARACTERS, payload: data.data.results });
                //dispatch({ type: LOADING, payload: true });

                while (offSet + data.data.count < data.data.total) {
                    offSet = offSet + 100;
                    urlAll = `https://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offSet}&${apiKey}`;

                    fetch(urlAll)
                        .then(response => response.json())
                        .then(dataSub => dispatch({ type: GET_ALL_CHARACTERS, payload: dataSub.data.results }))
                }
                //dispatch({ type: LOADING, payload: false });
            });
    }
}

export function getAllMovies() {
    let nameMovies = films.map(movie => movie.name)
    return { type: GET_ALL_MOVIES, payload: nameMovies }
}

export function getCharactersMovie(movie) {
    let movieSelected = films.filter(film => film.name === movie)[0].characters

    return { type: GET_CHARACTERS_MOVIE, payload: movieSelected }
}



export function setCharactersDetails(details) {

    return { type: SET_CHARACTERS_DETAILS, payload: details }
}

export function getMoviesCharacter(character) {
    let moviesCharacter = films.filter(movie => (movie.characters.find(e => e === character) !== undefined)).map(el => el.name);
    return { type: GET_MOVIES_CHARACTER, payload: moviesCharacter }

}







//offset primera lista 0 segunda igual al limite 100
//
//https://gateway.marvel.com/v1/public/characters?limit=100&offset=1500&ts=1&apikey=867eeaaa4ad1ba517a55671090ffff27&hash=d9c4482af567d0f924b6573fa51dda7S