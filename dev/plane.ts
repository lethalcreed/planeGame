/// <reference path="gameobject.ts"/>

class Plane extends GameObject {

    public behavior: Behavior;
    public speed: number = 5;
    public angle: number = 0;
    public keyState: any = {};

    constructor() {
        super(document.body, "plane", 39, 66, window.innerWidth / 2, window.innerHeight / 2);
        this.behavior = new Empty(this);
        window.addEventListener('keydown', this.KeyDown.bind(this));
        window.addEventListener('keyup', this.KeyUp.bind(this));
    }

    private KeyDown(e: KeyboardEvent): void {
        this.keyState[e.keyCode || e.which] = true;
    }

    private KeyUp(e: KeyboardEvent): void {
        this.keyState[e.keyCode || e.which] = false;
    }

    // Ik gebruik key states en check deze in de gameloop
    // Dit is een fix voor het inhouden van toetsen
    public update() {
        this.behavior.move();
        this.drawRotation(this.angle);
    }
}