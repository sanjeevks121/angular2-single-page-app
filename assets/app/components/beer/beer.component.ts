import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BeerService } from '../../services/beer.service';

@Component({
    selector: 'beer',
    templateUrl: './beer.component.html',
    providers: []
})
export class BeerComponent implements OnInit{
    id:string;
    beer: any;

    constructor(
        private _beerService : BeerService,
        private _route:ActivatedRoute){

        this.beer = false;
    }

    ngOnInit(){
        this._route.params.map(params => params["id"])
            .subscribe((id) => {
                this._beerService.getBeer(id)
                    .subscribe(beer => {
                        this.beer = beer.data.data;
                    })
        });
    }

}