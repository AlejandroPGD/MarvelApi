import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setCharactersDetails, getCharactersMovie } from '../../actions';

function Film() {
    let params = useParams();
    let dispatch = useDispatch();

    dispatch(getCharactersMovie(params.id));

    let allCharacters = useSelector(state => state.allCharacters)
    let charactersMovie = useSelector(state => state.charactersMovie)


    let funFil = (character) => {
        let cond = charactersMovie.find(e => e === character.name)
        if (cond !== undefined) return cond;
        return false
    }
    let charactersDetail = allCharacters.filter(funFil)

    dispatch(setCharactersDetails(charactersDetail));

    return (
        <div>
            <h1>
                {params.id}
            </h1>
            <div>
                {
                    charactersDetail.map((character) => (
                        <div key={character.id}>
                            <Link to={`/character/${character.id}`}>
                                <div>
                                    <h3>
                                        {character.name}
                                    </h3>
                                    <img width="100" height="100" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}></img>
                                </div>
                            </Link>
                        </div>
                    )
                    )
                }

            </div>
        </div>
    )
}

export default Film