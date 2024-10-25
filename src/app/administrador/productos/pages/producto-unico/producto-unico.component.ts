import { Component, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-unico',
  standalone: true,
  imports: [],
  templateUrl: './producto-unico.component.html',
  styleUrl: './producto-unico.component.scss'
})
export class ProductoUnicoComponent {
  // Forma actual
  idProducto = input.required<number>({alias: 'idd'});
  
  // Forma antigua
  public route = inject(ActivatedRoute);
  idProductoAntiguo = '';
  ngOnInit(){
    this.idProductoAntiguo = this.route.snapshot.params?.["idd"]
  }
}
