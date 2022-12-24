import { Injectable } from '@nestjs/common';
import { Car } from './models/Car.entity';

@Injectable()
export class AppService {
  cars: Car[] = [
    {
      id: 1,
      companyName: 'BMW',
      name: '316',
      ownerName: 'Salah',
      price: 210000,
    },
    {
      id: 2,
      companyName: 'Mercedes',
      name: 'C180',
      ownerName: 'Ahlem',
      price: 150000,
    },
    {
      id: 3,
      companyName: 'Citroen',
      name: 'C3',
      ownerName: 'Ahmed',
      price: 23000,
    },
    {
      id: 4,
      companyName: 'Volswagen',
      name: 'Golf7',
      ownerName: 'Hedia',
      price: 59000,
    },
  ];

  getHello(): string {
    return 'Welcome to the car shop API';
  }

  getCarById(id: number): Car {
    let selectedCar:Car=null
    this.cars.forEach((car) => {
      if (car.id == id) {
        selectedCar=car;
      }
    });
    return selectedCar;
  }
}
