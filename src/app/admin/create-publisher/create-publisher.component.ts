import {
  Component,
  OnInit,
} from '@angular/core';

console.log('`CreatePublisher` component loaded asynchronously');

@Component({
  selector: 'create-publisher',
  template: `
    <h1>Hello from Create Publisher</h1>    
  `,
})
export class CreatePublisherComponent implements OnInit {

  public ngOnInit(): void {
    console.log('hello `CreatePublisher` component');
  }

}
