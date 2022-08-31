import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(private educacionS: EducacionService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarEdudcacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    
  }

cargarEdudcacion(): void{
  this.educacionS.lista().subscribe(
    data =>{
      this.educacion = data;
    }
  )
}

borrar(id: number){
  if(id != undefined){
    this.educacionS.delete(id).subscribe(
      data => {
        this.cargarEdudcacion();
      }, err =>{
        alert("No se pudo eliminar");
      }
    )
  }
}

}
