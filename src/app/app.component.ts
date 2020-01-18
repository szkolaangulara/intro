import { Component } from '@angular/core';
import { Car } from './car/car.model';
import { CarType } from './car/car-type.enum';
import { EngineType } from './car/engine-type.enum';
import { CarService } from './car/car.service';
import { Animal } from './animals/animal.model';
import { Lion } from './animals/lion.model';
import { Duck } from './animals/duck.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public car: Car;
  public car1: Car;
  public animals: Animal[] = [];

  constructor(private carService: CarService) { // <= wstrzyknięcie zależności w konstruktorze
    this.car = new Car(
      'Audi',
      'A6',
      EngineType.GASOLINE,
      CarType.SEDAN,
      this.carService.checkIfDiscountIsAvailable('Audi'));

    this.car1 = new Car('Mercedes',
      'Klasa E',
      EngineType.DIESEL,
      CarType.COUPE,
      this.carService.checkIfDiscountIsAvailable('Mercedes'),
      this.carService.getDiscountForCar('Klasa E'));

    this.animals.push(new Lion('Lew', 4));
    this.animals.push(new Duck('Kaczka', 2));

  }
}
