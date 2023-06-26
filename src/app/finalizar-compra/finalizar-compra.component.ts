import { Component } from '@angular/core';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css']
})
export class FinalizarCompraComponent {
  mostrar!: boolean;
  public mostrarFormulario(): void {
    this.mostrar = true;
  }
  mostrar1!: boolean;
  public mostrarFormulario1(): void {
    this.mostrar1 = true;
  }
  
  mostrar3!: boolean;
  public mostrarFormulario3(): void {
    this.mostrar3 = true;
  }

}
