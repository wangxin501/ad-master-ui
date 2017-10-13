import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IBaseDomain, IErrorResponse } from 'src/app/domain';
import { AppUtil } from '../tools/app.utils';

export class BaseWebService<T extends IBaseDomain> {

  private subject: Subject<T> = new Subject<T>();
  private allData: Observable<T>;

  constructor(public $http: Http,
    public baseUrl: string) {
  }

  getAll(): Observable<T[]> {
    const self: BaseWebService<T> = this;

    return this.$http.get(this.baseUrl)
      .map((response) => response.json() as T[]);
  }

  getById(id: number): Observable<T> {
    const self: BaseWebService<T> = this;

    return this.$http.get(`${this.baseUrl}/${id}`)
      .map((response) => response.json() as T);
  }

  deleteById(id: number): Observable<T> {
    const self: BaseWebService<T> = this;

    return this.$http.delete(`${this.baseUrl}/${id}`)
      .map((response) => response.json() as T);
  }

  create(id: number, obj: T): Observable<T> {
    const self: BaseWebService<T> = this;

    return this.$http.post(`${this.baseUrl}`, obj)
      .map((response) => response.json() as T);
  }

  update(id: number, obj: T): Observable<T> {
    const self: BaseWebService<T> = this;

    return this.$http.put(`${this.baseUrl}`, obj)
      .map((response) => response.json() as T);
  }

  search(criteria: string): Observable<T[]> {
    return this.$http.get(`${this.baseUrl}?${criteria}`)
      .map((response) => response.json().data as T[]);
  }
}
