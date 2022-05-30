import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  h1 = 'Prove ANGULAR';
  counter = 'Counter';
  alert = 'Alert';
  
  count = 0;

  nomi = ['Giacomo','Francesco','Giorgio','Davide']

  aumenta(){
    this.count++
  }

  attenzione(){
    alert('TI HO DETTO DI NON CLICCARE!!!!')
  }

}
