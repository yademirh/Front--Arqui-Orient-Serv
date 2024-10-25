import { Routes } from "@angular/router";

export const routesProducto : Routes = [
    {
        path: "",
        loadComponent: () => import("./pages/productos/productos.component").then(m => m.ProductosComponent)
    },
    {
        path: ":idd",
        loadComponent: () => import("./pages/producto-unico/producto-unico.component").then(c => c.ProductoUnicoComponent)
    }
]