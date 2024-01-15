import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

constructor() { }
@Input() inputValue: string = '';

ngOnInit() {
console.log("initialised")
  }
ngOnChanges(){
  console.log("On changed hook called")
}
ngAfterViewInit(){
  console.log("After View Init Called")
}
ngOnDestroy(){
  console.log("destroyed")
}
}

