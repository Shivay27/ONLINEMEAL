import { Component, ViewChild } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

  @ViewChild(HomeComponent) homeComponent: HomeComponent;
  ngOnInit() {
    console.log('Hello Shiva!');


  }

  // Public Methods

//   onHomeButtonAction(event: any) {
//     console.log(event)
//     switch (event.action) {
//       case 'ORDER NOW':
//         console.log('Method triggered for order now');
//         this.homeComponent.calledFromParent();
//         break;
//       case 'SUBMIT':
//         console.log('Method triggered for SUBMIT');
//         break;
//       case 'MAKE PAYMENT':
//         console.log('Method triggered for MAKE PAYMENT');
//         break;
//       case 'CLEAR DATA':
//         this.clear();
//         break;

//       default:
//         break;
//     }
//   }

//   private clear() {
//     // 
//     console.log('Method triggered for CLEAR DATA');
//   }
// }

