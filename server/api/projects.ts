import data   from '../../data/db';
import { Project } from '../../types/';

export default defineEventHandler( async (event: any): Promise<any>  => {

    const projects: Project[] = data;

    const { id } = getQuery(event);
    const project: Project | undefined = projects.find(project => project.id == id);

    if(id && project) return project;
    else if(id && !project) {
        throw createError({
            statusCode: 400,
            statusMessage: 'We don\'t have the page you\'re looking for.'
        })
    } 
    else { return projects };
});