import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface EventEmitterTypeDef {
  action: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() header: string = 'welcome to online meal';
  @Input() description: string = `The cuisine of India is one of the world's most diverse cuisines, characterized by its sophisticated and
  subtle use of the many spices,
  vegetables, grains and fruits grown across India.`
  @Input() buttonLabel: string = 'ORDER NOW'

  @Output() buttonAction: EventEmitter<EventEmitterTypeDef> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // Public Methods

  onButtonClick(): void {
    this.buttonAction.emit({ action: this.buttonLabel })
  }

  calledFromParent(): void {
    console.log('I amCalled from Parent');
  }

}
