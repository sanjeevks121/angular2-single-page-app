import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { BeersComponent } from "./components/beers.component";
import { BeerComponent } from "./components/beer/beer.component";




const APP_ROUTES: Routes = [
    { path: '', component: BeersComponent },
    { path: 'profile/:id', component: BeerComponent }
];

export const routing : ModuleWithProviders  = RouterModule.forRoot(APP_ROUTES);