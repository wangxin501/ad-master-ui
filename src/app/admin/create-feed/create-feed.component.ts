import {
  Component,
  OnInit,
} from '@angular/core';

console.log('`CreateFeed` component loaded asynchronously');

@Component({
  selector: 'create-feed',
  template: `
    <h1>Hello from Create Feed Detail 1</h1>    
  `,
})
export class CreateFeedComponent implements OnInit {

  public ngOnInit(): void {
    console.log('hello `CreateFeed` component');
  }

}
