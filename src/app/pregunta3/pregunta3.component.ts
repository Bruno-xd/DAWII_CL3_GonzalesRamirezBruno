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

  lista: Lista[] = []
  displayedColumns: string[] = ["Id", "Nombre", "Tipo", "Dimension"]
  filteredLocations: Lista[] = [];

  constructor(private apirestservice : ApirestService,
    private snackBar: MatSnackBar){

  }

  ngOnInit(): void {
    this.apirestservice.listar()
      .subscribe(
        (data) => {
          this.lista = data
          this.filteredLocations = this.filtrarporId(this.lista);
        },
        (error) => {
          this.snackBar.open('Error al consumir API Rest', 'OK', {duration: 50000})
        }        
      )
  }

 // private filterLocationsById(locations: Location[]): Location[] {
 //   return locations.filter(location => location.id % 2 === 0);
 // }

    private filtrarporId(lista: Lista[]): Lista[] {
      return lista.filter(lista => lista.id % 2 === 0);
    }


}
