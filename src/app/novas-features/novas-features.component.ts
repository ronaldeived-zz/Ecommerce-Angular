import { Component } from '@angular/core';

@Component({
  selector: 'app-novas-features',
  templateUrl: './novas-features.component.html',
})
export class NovasFeaturesComponent {

  public contador: number = 0;
  public nome:string = "";

  public urlImagem = "https://angular.io/assets/images/logos/angular/angular.svg";

  adicionarClique(){
    this.contador++;
  }

  zerarContador(){
    this.contador = 0;
  }

  KeyUp(event:any){
    this.nome = event.target.value;
  }
}
