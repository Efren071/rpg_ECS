import { Entity } from './entity';

export class EcsManager {
    public entites: any[];
    public system: any[];
    public next_entity_id: number;

    constructor() {
        this.entites = [];
        this.system = [];
        this.next_entity_id = 0;
    }

    createEntity(entityName: string) {
        const id = this.next_entity_id;
        this.entites[id] = new Entity(id, entityName);

        this.next_entity_id += 1;
    }

    addComponent(targetId: number, component: any): void {

    }
}