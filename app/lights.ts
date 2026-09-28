import { Light } from "./lightObject"

interface Coords {
    posX: number;
    posY: number;
}

export class Lights {

    private lightsOn = 0;
    private grid: Light[][];

    constructor() {
        this.grid = [];

        for (let x = 0; x < 1000; x++) {
            this.grid[x] = [];
            for (let y = 0; y < 1000; y++) {
                this.grid[x][y] = new Light();
            }            
        }
    }

    TurnOn (first : Coords, second : Coords): void {
        for (let x = first.posX; x <= second.posX; x++) {
            for (let y = first.posY; y <= second.posY; y++) {
                this.grid[x][y].TurnOn();
                this.lightsOn++;
            }            
        }
    }

    TurnOff (first : Coords, second : Coords): void {
        for (let x = first.posX; x <= second.posX; x++) {
            for (let y = first.posY; y <= second.posY; y++) {
                this.grid[x][y].TurnOff();
                this.lightsOn--;
            }            
        }
    }

    Toggle (first : Coords, second : Coords): void {
        for (let x = first.posX; x <= second.posX; x++) {
            for (let y = first.posY; y <= second.posY; y++) {
                this.grid[x][y].Toggle();
                if(this.grid[x][y].GetStatus()) 
                    this.lightsOn++;
                else this.lightsOn--;
            }            
        }
    }    

    GetLightsOn() : number {
        return this.lightsOn;
    }
}