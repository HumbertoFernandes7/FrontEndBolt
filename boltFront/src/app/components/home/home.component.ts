import { Component, OnInit } from '@angular/core';
import { UsinaService } from '../../services/usina.service';
import { CommonModule } from '@angular/common';
import { usina } from '../../modulos/usina';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 

  usinas: usina[] = [];
  spinner: boolean = true;
  modalErro: boolean = false;
  mensagemErro: string = "Aconteceu um erro inesperado contate o suporte!";

  constructor(private usinaService: UsinaService){}

  ngOnInit(): void {
    this.listaTop5Empresas();
  }
  
  listaTop5Empresas() {
   this.usinaService.listaTop5Empresas().subscribe({
    next: (retorno) => {
      this.usinas = Array.isArray(retorno) ? retorno : [retorno];
      this.spinner = false;
    },
    error: () => {
      this.modalErro = true
      this.spinner = false;
    }
   });
  }

  atualizaManualmente(){
    this.spinner = true;
    this.usinaService.atualizaManualmente().subscribe({
      next: () => {
        this.spinner = false;
        
      },
      error: (erro) => {
        this.spinner = false;
        console.log(erro);
        
      }
    });
  }

  fecharModalErro(){
    this.modalErro = false;
  }
}
