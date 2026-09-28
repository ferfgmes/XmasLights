import {Lights} from "@/lights";

describe('lights', () => { 
    it('should turn on specific given lights', () => {

        const sut = new Lights();

        sut.TurnOn({posX: 0, posY: 0}, {posX: 2, posY: 2}); //9

        const result = sut.GetLightsOn();

        expect(result).toBe(9);
    })

    it('should turn off specific given lights', () => {

        const sut = new Lights();

        sut.TurnOn({posX: 0, posY: 0}, {posX: 999, posY: 999}) //1000000
        sut.TurnOff({posX: 0, posY: 0}, {posX: 2, posY: 2}); //9

        const result = sut.GetLightsOn();

        expect(result).toBe(999991);
    })

    it('should toggle specific given lights', () => {
        const sut = new Lights();

        sut.TurnOn({posX: 0, posY: 0}, {posX: 9, posY: 9}) //100
        sut.Toggle({posX: 0, posY: 0}, {posX: 2, posY: 2}); //9

        const result = sut.GetLightsOn();

        expect(result).toBe(91);
    })
 })