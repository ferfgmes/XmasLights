export class Light {

    private status = 0;

    constructor() {};
    
    TurnOn(): void {
        this.status = 1;
    }

    TurnOff(): void {
        this.status = 0;
    }

    Toggle(): void {
        if(this.status === 0) 
            this.status = 1;
        else this.status = 0;
    }

    GetStatus(): number {
        return this.status;
    }
}