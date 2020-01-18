import { Animal } from './animal.model';
import { Voice } from './voice.interface';

export class Lion extends Animal implements Voice{

  constructor(animalType: string, legs: number) {
    super(animalType, legs)
  }

  // implementacja metody z interfejsu
  say(): string {
    return `${this.animalType} robi ROOOOAAAAR i ma tyle nóg: ${this.legs}`;
  }
}
