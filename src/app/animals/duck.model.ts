import { Animal } from './animal.model';
import { Voice } from './voice.interface';

export class Duck extends Animal implements Voice{

  constructor(animalType: string, legs: number) {
    super(animalType, legs)
  }

  // implementacja metody z interfejsu
  say(): string {
    return `${this.animalType} robi KWA KWA KWA i ma tyle nóg: ${this.legs}`;
  }
}
