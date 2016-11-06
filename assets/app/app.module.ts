import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpModule} from "@angular/http";

import { AppComponent } from "./app.component";
import { BeersComponent } from "./components/beers.component";
import { BeerComponent } from "./components/beer/beer.component";
import { PaginationComponent } from "./components/pagination/pagination.component";

import { routing } from "./app.routing";


@NgModule({
    declarations: [
        AppComponent, BeersComponent, BeerComponent, PaginationComponent
    ],
    imports: [BrowserModule, FormsModule, routing,
        ReactiveFormsModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}