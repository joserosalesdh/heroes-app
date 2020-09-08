import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import HeroCard from './HeroCard';

const HeroeList = ({ publisher }) => { // publisher viene del array data/heroes.js 

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) // el arreglo son las dependecias de cuando tendria que memorizar esto
    // const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero} /* En pocas palabras digo que extraiga todo del hero y esas van a ser nuevas propiedades que voy a mandar al hero card*/
                    />
                ))
            }
        </div >
    )
}

export default HeroeList
