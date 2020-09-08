import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics']; // si me manda cualquier cosa que no este dentro de este arreglo voy a marcar un error

    if (!validPublishers.includes(publisher)) { //lo niego para que ejecute esta accion si no lo encuentra
        throw new Error(`Publisher "${publisher}" no es correcto`);
    };

    return heroes.filter(heroe => heroe.publisher === publisher); //siempre y cuando sea igual a publisher que me estan mandando como argumento

};

