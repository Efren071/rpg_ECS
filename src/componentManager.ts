enum ComponentType {
    Name,
    Sprite,
    Movement,
    Collider,
}

type Component = any;

export class ComponentManager {
    private dictionary: Map<ComponentType, Component>;

    constructor() {
        this.dictionary = new Map([
            ComponentType.Name, {}
        ]);
    }

    public getComponent(componentType: ComponentType): Component {
        return
    }
}