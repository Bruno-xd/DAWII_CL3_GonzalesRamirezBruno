import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.css']
})
export class Pregunta2Component {

  montoPrestamo: number;
  cuotas: number;
  montoCuota: number;

  constructor() {
    this.montoPrestamo = 0; // Asignar valor en el constructor
    this.cuotas = 0;   // Asignar valor en el constructor
    this.montoCuota = 0;
  }

  calcularCuotas() {
    // Verificar las condiciones y calcular el total con interés
    let totalDeuda = this.montoPrestamo;

    if (this.montoPrestamo > 5000) {
      this.cuotas = 3;
    } else if (this.montoPrestamo < 1000) {
      this.cuotas = 1;
    } else if (this.montoPrestamo >= 2000 && this.montoPrestamo <= 3000) {
      this.cuotas = 2;
    } else {
      this.cuotas = 5;
    }

    if (this.montoPrestamo < 4000) {
      totalDeuda += totalDeuda * 0.12; // Aplicar 12% de interés
    } else {
      totalDeuda += totalDeuda * 0.10; // Aplicar 10% de interés
    }

    // Calcular el monto de cada cuota
    this.montoCuota = totalDeuda / this.cuotas;
  }

}
