import { Component } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { PaginationComponent } from "./pagination/pagination.component";

@Component({
    selector: 'beers',
    templateUrl: './beers.component.html',
    providers: []
})
export class BeersComponent {
    beers: any[];
    currentPage = 1;
    numberOfPages:number;
    totalResults:number;

    constructor(private _beerService : BeerService){
        this._beerService.getBeers().subscribe(beers => {
            this.numberOfPages =  beers.data.numberOfPages;
            this.totalResults =  beers.data.totalResults;
            this.beers =  beers.data.data;
        });
    }

    onNotify(page:number) {
        this.currentPage = page;
        this._beerService.updatePage(page);
        this._beerService.getBeers().subscribe(beers => {
            this.numberOfPages =  beers.data.numberOfPages;
            this.beers =  beers.data.data;
        });
    }
}