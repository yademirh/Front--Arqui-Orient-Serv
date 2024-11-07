import { Routes } from '@angular/router';
import { AuthComponent } from './home/pages/auth/auth.component';
import { ProductComponent } from './admin/product/pages/product/product.component';
import { ProductOnlyComponent } from './admin/product/pages/product-only/product-only.component';
import { protectionGuard } from './guards/protection.guard';


export const routes: Routes = [
  {
    path: "",
    component: AuthComponent
  },
  {
    path: "admin",
    canActivate: [ protectionGuard ],
    children: [
      {
        path: "product",
        component: ProductComponent
      },
      {
        path: "product/:id",
        component: ProductOnlyComponent
      }
    ]
  }
];
