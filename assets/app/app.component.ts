import { Component } from '@angular/core';
import { BeerService } from './services/beer.service';

@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapse">
                        <span class="sr-only">Toggle navigatopn</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="#" class="navbar-brand">Beer search</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                  <ul class="nav navbar-nav">
                    <li><a routerLink="/">Home</a></li>
                  </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>
        <div class="container">
             <router-outlet></router-outlet>  
        </div>`,
    providers: [BeerService]
})
export class AppComponent {
}