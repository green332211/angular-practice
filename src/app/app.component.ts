import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title'
  number = 42
  arr = [1, 2, 3]

  obj = { a: 1, b: {c: 2} }

  inputValue = ''

  // img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISAPF8vrQ6xvb0zExOUS00ZB_KFeIi2UiC5ZkWvWzveIO0wATsQ'

  constructor() {
    // setTimeout( () => {
    //   console.log('Timeout is over')
    //   this.img = 'https://angular.io/assets/images/logos/angular/angular.png'
    // }, 5000)
  }

  onInput(event?: any) {
    console.log('Event', event)
    this.inputValue = event.target.value
  }

  onClick() {
    console.log('Click!')
  }

}
