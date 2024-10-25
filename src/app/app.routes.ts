import { Routes } from '@angular/router';
import { ErrorComponent } from './publico/pages/error/error.component';
import { OtroComponent } from './administrador/usuarios/pages/otro/otro.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        loadComponent: () => import("./publico/pages/home/home.component")
    },
    {
        path: "administrador",
        children: [
            {
                path: 'producto',
                loadChildren: () => import("./administrador/productos/producto.routes").then(r => r.routesProducto)
            },
            {
                path: 'usuario',
                loadComponent: () => import("./administrador/usuarios/pages/usuario/usuario.component"),
                children: [
                    {
                        path: "otro",
                        component: OtroComponent
                    }
                ]
            }
        ]
    },
    {
        path: "**",
        component: ErrorComponent
    }
];
