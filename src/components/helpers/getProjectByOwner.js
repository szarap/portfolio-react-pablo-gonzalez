import { projects } from '../data/projects';

export const getProjectByOwner = ( owner ) => {

    const validOwner = ['Pablo Gonzalez'];
    if ( !validOwner.includes( owner) ){
        throw new Error( [`${ owner } is not a valid owner`]);
    }

    return projects.filter( own => own.owner === owner );
    //if in a future there is more than one owner would be easier to do it like this
}