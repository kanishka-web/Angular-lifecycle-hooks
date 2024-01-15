import { Component } from '@angular/core';
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  destroyed=false;
  input_val = 'hello'
  destroyComponent(){
    this.destroyed=true;
  }
}
