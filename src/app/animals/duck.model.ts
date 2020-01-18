import { Animal } from './animal.model';

export class Duck extends Animal {

  constructor(protected animalType: string, protected legs: number) {
    super(animalType, legs)
  }

  // implementacja metody z interfejsu
  say(): string {
    return `${this.animalType} robi KWA KWA KWA i ma tyle nóg: ${this.legs}`;
  }
}
