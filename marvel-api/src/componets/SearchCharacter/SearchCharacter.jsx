import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCharactersDetails } from '../../actions'

function SearchCharacter() {
    let characters = useSelector(state => state.allCharacters)
    let dispatch = useDispatch()
    let [input, setInput] = useState({
        searchCharacter: ""
    })

    let [sea, setSea] = useState([])
    function onHandle(e) {
        setInput(prevInput => {
            return {
                ...prevInput,
                [e.target.name]: e.target.value,
            }
        })
    }
    let result = []
    function search() {

        result = characters.filter(e => e.name === input.searchCharacter);

        dispatch(setCharactersDetails(result));
        setSea(result);
    }
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                search();
            }}>
                <label>Personaje</label>
                <input type="text" name='searchCharacter' value={input.searchCharacter} onChange={onHandle}></input>
                <button type='submit'>Buscar</button>
            </form>

            <div>
                {

                    sea.map((character) => (
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

export default SearchCharacter