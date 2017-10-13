import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Title {

  public value: string = 'Angular 2';

  constructor(
    public http: Http
  ) {}

  public getData(): any {
    console.log('Title#getData(): Get Data');

    /**
     * return this.http.get('/assets/data.json')
     * .map(res => res.json());
     */
    return {
      value: 'AngularClass'
    };
  }

}
