import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getAllCharacters, getAllMovies } from '../../actions';
import styles from './Home.module.css'

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCharacters());
        dispatch(getAllMovies());
    }, [])



    return (<div>
        <div className={styles.Home}>Home</div>
        {/* <div className={loading ? styles.Cargando : styles.loaded}>
            <h1>
                CARGANDO...
            </h1></div> */}
        <h1><Link to='/films'>Peliculas</Link></h1>
        <h1><Link to='/serachCharacter'>Buscar personajes</Link></h1>
        {/* <img src={`${vari.data.results[0].thumbnail.path}.${vari.data.results[0].thumbnail.extension}`} alt="hola"></img> */}
    </div>

    )
}

export default Home

