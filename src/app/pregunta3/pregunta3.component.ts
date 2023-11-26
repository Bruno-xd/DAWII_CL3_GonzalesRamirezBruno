import { Component } from '@angular/core';
import { ApirestService } from '../apirest.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Lista } from './lista';

@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.component.html',
  styleUrls: ['./pregunta3.component.css']
})
export class Pregunta3Component {

  cursos: Lista[] = []
  displayedColumns: string[] = ["Id", "Nombre"]

  constructor(private apirestservice : ApirestService,
    private snackBar: MatSnackBar){

  }

  ngOnInit(): void {
    this.apirestservice.listar()
      .subscribe(
        (data) => {
          this.cursos = data
        },
        (error) => {
          this.snackBar.open('Error al consumir API Rest', 'OK', {duration: 50000})
        }        
      )
  }

}
