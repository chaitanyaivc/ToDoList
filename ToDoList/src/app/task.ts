export class Task {
    name: string;
    isDone: boolean;
    id: number
    constructor(name, id, isDone) {
        this.isDone = isDone;
        this.name = name;
        this.id = id;
    }
}