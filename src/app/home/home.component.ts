import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private route: ActivatedRoute, private router: Router){

  }

  onNavigateToPregunta1(): void{
    this.router.navigate(['uno'], {relativeTo: this.route});
  }

  onNavigateToPregunta2(): void{
    this.router.navigate(['dos'], {relativeTo: this.route});
  }

  onNavigateToPregunta3(): void{
    this.router.navigate(['tres'], {relativeTo: this.route});
  }

}
