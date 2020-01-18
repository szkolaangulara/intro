import { Voice } from './voice.interface';

export abstract class Animal implements Voice {
  constructor(public animalType: string,
              public legs: number) {
  }
}
