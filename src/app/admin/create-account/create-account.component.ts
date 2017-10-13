import {
  Component,
  OnInit,
} from '@angular/core';

console.log('`CreateAccount` component loaded asynchronously');

@Component({
  selector: 'create-account',
  template: `
    <h1>Hello from Create account Detail 1</h1>    
  `,
})
export class CreateAccountComponent implements OnInit {

  public ngOnInit(): void {
    console.log('hello `CreateAccount` component');
  }

}
