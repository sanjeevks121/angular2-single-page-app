import { Component } from '@angular/core';
import { Directive, ElementRef, Input, Renderer, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    providers: []
})
export class PaginationComponent {

    @Input() currentPage:number;
    @Input() numberOfPages:number;
    @Output() notify: EventEmitter<number> = new EventEmitter<number>();

    constructor(){

    }

    setPage(pageNo:number) {
        this.currentPage = pageNo;
    }

    onClick(page:number) {
        this.setPage(page);
        this.notify.emit(page);
    }
}