import { Injectable } from '@nestjs/common';
import { House } from './models/House.entity';

@Injectable()
export class AppService {
  houses: House[] = [
    { id: 1, adress: 'Lac', ownerName: 'Mostfa', price: 2000000 },
    { id: 2, adress: 'Carthage', ownerName: 'Mariem', price: 13000000 },
    { id: 3, adress: 'Laaouina', ownerName: 'Omar', price: 90000 },
    { id: 4, adress: 'Manar', ownerName: 'Heni', price: 220955 },
  ];

  getHello(): string {
    return 'Welcome to the housing API';
  }

  getHouseById(id: number): House {
    let selectedHouse: House = null;
    this.houses.forEach((house) => {
      if (house.id == id) {
        selectedHouse = house;
      }
    });
    return selectedHouse;
  }
}
