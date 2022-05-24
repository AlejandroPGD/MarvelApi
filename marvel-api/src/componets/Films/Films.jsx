import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Films() {

    const movies = useSelector(state => state.allMovies)
    const characters = useSelector(state => state.allCharacters)


    return (
        <div>
            {
                movies.map(
                    (movie, index) => (<div key={index}>
                        <Link to={`/films/${movie}`}>
                            {movie}
                        </Link>
                    </div>))
            }
        </div >
    )
}

export default Films