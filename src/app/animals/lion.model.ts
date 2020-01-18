import { Animal } from './animal.model';

export class Lion extends Animal {

  constructor(animalType: string, legs: number) {
    super(animalType, legs)
  }

  // implementacja metody z interfejsu
  say(): string {
    return `${this.animalType} robi ROOOOAAAAR i ma tyle nóg: ${this.legs}`;
  }
}
