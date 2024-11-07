import { Component, inject } from '@angular/core';
import { ProductoService } from '../../../../services/producto.service';
import { ProductoInterface } from '../../../../interfaces/producto-interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  public httpProduct = inject(ProductoService)

  ngOnInit(): void{
    this.httpProduct.getProducto().subscribe((res: ProductoInterface[])=>{
      console.log(res);
      
    })
  }
}
