import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.css']
})
export class Pregunta1Component {

  cantidad: number;
  precio: number;
  total: number;

  constructor() {
    this.cantidad = 0; // Asignar valor en el constructor
    this.precio = 0;   // Asignar valor en el constructor
    this.total = 0;
  }

  calcularDescuento() {
    this.total = this.cantidad * this.precio;

    // Aplicar descuento del 20% si el total es mayor a $200
    if (this.total > 200) {
      this.total = this.total * 0.8; // Aplicar descuento del 20%
    }
  }

}
