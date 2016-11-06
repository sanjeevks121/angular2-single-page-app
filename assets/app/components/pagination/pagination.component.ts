import { Component } from '@angular/core';
import { Directive, ElementRef, Input, Renderer, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    providers: []
})
export class PaginationComponent {

    numbersAfter:any[];
    @Input() currentPage:number;
    @Input() numberOfPages:number;
    @Output() notify: EventEmitter<number> = new EventEmitter<number>();

    constructor(){
        this.numbersAfter = [2,3,4,5];
    }

    setPage(pageNo:number) {
        this.currentPage = pageNo;
    }

    updatePagination(pageNo:number) {
        this.numbersAfter = [];
        for(var i = pageNo +1; i < Math.min(pageNo + 4, this.numberOfPages); i++){
            this.numbersAfter.push(i);
        }
    }

    onClick(page:number) {
        this.setPage(page);
        this.updatePagination(page);
        this.notify.emit(page);
    }
}