import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  car!: Car;
  brand = '';
  model = '';
  engineCapacity = 0;
  enginePower = 0;
  image = '';
  info = '';

  constructor(
    public carService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.car = new Car();
  }
  createNewCar() {
    // this.car = new Car();
    this.car.brand = this.brand;
    this.car.model = this.model;
    this.car.engineCapacity = this.engineCapacity;
    this.car.enginePower = this.enginePower;
    this.car.image = this.image;
    this.car.info = this.info;

    this.carService.create(this.car).subscribe((dane: Car) => {
      this.car = dane;
    });
  }
}
