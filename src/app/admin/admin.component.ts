import {
  Component,
  OnInit,
} from '@angular/core';

console.log('`Admin` component loaded asynchronously');

@Component({
  selector: 'admin',
  template: `
    <nav class="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <a class="nav-link"  [routerLink]=" ['./create-account'] ">Create Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]=" ['./create-publisher'] ">Create Publisher</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]=" ['./create-feed'] ">Create Feed</a>
        </li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `,
})
export class AdminComponent implements OnInit {

  public ngOnInit(): void {
    console.log('hello `Admin` component');
  }

}
