import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function Character() {
    let params = useParams();
    const paramId = parseInt(params.id)
    let charactersDetails = useSelector(state => state.charactersDetails)
    let characterDetail = charactersDetails.filter(e => e.id === paramId)[0]
    console.log(characterDetail)

    return (
        <div>

            <h1>{characterDetail.name}</h1>
            <h4>{characterDetail.description}</h4>
            <img src={`${characterDetail.thumbnail.path}.${characterDetail.thumbnail.extension}`} alt={characterDetail.name}></img>

        </div>
    )
}

export default Character