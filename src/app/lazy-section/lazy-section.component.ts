import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-section',
  template: `
  
  <div id="container" class="d-flex flex-column justify-content-center align-items-center">
    <h1>Is this a lazy loading module?</h1>
    <img src="assets/img/doubt.png" alt="doubt-meme">
  </div>`

  ,
  styles: [`
    #container{
      height:100vh;
    }
  
  `]
})
export class LazySectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}