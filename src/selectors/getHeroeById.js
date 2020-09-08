import { heroes } from '../data/heroes';

export const getHeroeById = (id) => {

    return heroes.find(heroe => heroe.id === id); //siempre y cuando sea igual a id que me estan mandando como argumento

};