import { Routes } from "@angular/router";
import { CategoryDetailsComponent } from "./components/category-details/category-details.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";

export const appRoutes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'product/details/:id', component: ProductDetailsComponent},
    {path: 'category/:id', component: CategoryDetailsComponent}
]