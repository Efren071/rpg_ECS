export class Entity {
    public id: number;
    public name: string;
    public components: [];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;

        this.components = [];
    }
}