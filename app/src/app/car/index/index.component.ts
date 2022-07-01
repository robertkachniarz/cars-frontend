import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  car: Car[] = [];
  constructor(public carService: CarService) {}

  ngOnInit(): void {
    this.carService.getAll().subscribe((dane: Car[]) => {
      this.car = dane;
      console.log(this.car);
    });
  }
}
