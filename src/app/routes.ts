import { Routes } from "@angular/router";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductListComponent } from "./product-list/product-list.component";

export const appRoutes: Routes = [
    {path: '', component: ProductListComponent},
    {path: 'details/:id', component: ProductDetailsComponent}
]