import { Injectable } from '@nestjs/common';
import { PrometheusConfig } from './config/prometheus.config';
import { House } from './models/House.entity';

@Injectable()
export class AppService {
  constructor(private readonly prometheusConfig: PrometheusConfig) {}

  houses: House[] = [
    { id: 1, adress: 'Lac', ownerName: 'Mostfa', price: 2000000 },
    { id: 2, adress: 'Carthage', ownerName: 'Mariem', price: 13000000 },
    { id: 3, adress: 'Laaouina', ownerName: 'Omar', price: 90000 },
    { id: 4, adress: 'Manar', ownerName: 'Heni', price: 220955 },
  ];

  getHello(): string {
    return 'Welcome to the house API';
  }

  getHouseById(id: number): House {
    this.prometheusConfig.counterHouseRequests.add(1, { pid: process.pid });
    let selectedHouse: House = null;
    this.houses.forEach((house) => {
      if (house.id == id) {
        selectedHouse = house;
      }
    });
    return selectedHouse;
  }
}
