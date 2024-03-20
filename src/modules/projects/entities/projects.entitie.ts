import { randomUUID } from 'crypto';


export class Projects {
    readonly id: string
    title: string
    image: string | null
    url: string
    github: string
    description: string

    constructor(){
        this.id = randomUUID()
    }
}