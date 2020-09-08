import React from 'react'
import HeroeList from '../heroes/HeroeList'

const MarvelScreen = () => {
    return (
        <div>
            <h1>MARVEL Screen</h1>
            <hr />

            <HeroeList publisher="Marvel Comics" />
        </div>
    )
}

export default MarvelScreen
