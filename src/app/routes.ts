import { Routes } from "@angular/router";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";

export const appRoutes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'details/:id', component: ProductDetailsComponent}
]