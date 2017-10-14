import {
  Component,
  OnInit,
} from '@angular/core';

console.log('`CreateAccount` component loaded asynchronously');

@Component({
  selector: 'create-account',
  templateUrl: './create-account.html'
})
export class CreateAccountComponent implements OnInit {

  public ngOnInit(): void {
    console.log('hello `CreateAccount` component');
  }

}
