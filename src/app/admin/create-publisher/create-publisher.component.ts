import {
  Component,
  OnInit,
} from '@angular/core';

console.log('`CreatePublisher` component loaded asynchronously');

@Component({
  selector: 'create-publisher',
  templateUrl: './create-publisher.html'
})
export class CreatePublisherComponent implements OnInit {

  public ngOnInit(): void {
    console.log('hello `CreatePublisher` component');
  }

}
