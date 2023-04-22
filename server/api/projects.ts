import data   from '../../data/db';
import { Project } from '../../types/';


export default defineEventHandler( async (event: any): Promise<any>  => {

    const projects: Project[] = data;

    return { projects }
});