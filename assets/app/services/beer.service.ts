import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BeerService{
    page = 1;

    constructor(private _http: Http){
        console.log("Beer service ready...");
    }

    updatePage(page:number){
        this.page = page;
    }

    getBeers(){
        return this._http.get("/beers/" + "?p=" + this.page )
            .map(res => res.json());
    }

    getBeer(id:string){
        return this._http.get("/beer/" + id )
            .map(res => res.json());
    }


}

