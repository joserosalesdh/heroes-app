import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroeById } from '../../selectors/getHeroeById';

const HeroScreen = ({ history }) => {

    const { heroeId } = useParams(); //Este hook va a extraer los parametro que vayan por la url
    // desestructuro heroeId de los params

    const hero = useMemo(() => getHeroeById(heroeId), [heroeId])
    // const hero = getHeroeById(heroeId);

    if (!hero) { //si el hero no existe
        return <Redirect to="/" />
    };

    const handleReturn = () => {

        if (history.lenght <= 2) {
            history.push('/')
        } else {
            history.goBack(); // Esto es para volver a la pagina anterior
        }

    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    at={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego:</b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance:</b>{first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>

            </div>
        </div>
    )
}

export default HeroScreen
