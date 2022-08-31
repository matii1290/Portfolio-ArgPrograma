import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { HttpClient } from '@angular/common/http';
import { persona } from 'src/app/Model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {
  persona: persona = new persona("","","");
  isLogged = false;
    
  constructor(public personaService: PersonaService, private router:Router, private tokenService: TokenService) { }
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{this.persona = data});

    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else {
      this.isLogged = false;
    }
  }

    onLogOut():void{
      this.tokenService.logOut();
      window.location.reload();
      
    }

    login(){
      this.router.navigate(['/login'])
    }
    }
    
  

  


    