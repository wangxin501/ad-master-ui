import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IBaseDomain, IErrorResponse } from 'src/app/domain/base-domain';
import { AppUtil } from 'src/app/tools/tools/app.utils';

export class CachedBaseWebService<T extends IBaseDomain> {

  public allData: T[] = [];
  private subject: Subject<T> = new Subject<T>();

  constructor(public $http: Http,
    public baseUrl: string) {
  }

  getAll(): Promise<T[]> {
    const self: CachedBaseWebService<T> = this;

    return this.$http.get(this.baseUrl)
      .toPromise()
      .then((response) => {
        const data: T[] = response.json() || [];
        self.allData = data;

        return data;
      })
      .catch(this.handleError);
  }

  getById(id: number): Promise<T> {
    const self: CachedBaseWebService<T> = this;

    return this.$http.get(`${this.baseUrl}/${id}`)
      .toPromise()
      .then((response) => {
        const data: T = response.json();
        if (AppUtil.isUndefinedOrNull(data)) {
          return null;
        }

        let found: boolean = false;
        self.allData.forEach((element, index) => {
          if (element.id === id) {
            Object.assign(element, data);
            found = true;
          }
        });
        if (!found) {
          self.allData.push(data);
        }

        return data;
      })
      .catch(this.handleError);
  }

  deleteById(id: number): Promise<T> {
    const self: CachedBaseWebService<T> = this;

    return this.$http.delete(`${this.baseUrl}/${id}`)
      .toPromise()
      .then((response) => {
        const data: T = response.json();
        self.allData.forEach((data, index) => {
          if (data.id === id) {
            self.allData.splice(index, 1);
          }
        });
        self.subject.next(data);

        return data;
      })
      .catch(this.handleError);
  }

  create(id: number, obj: T): Promise<T> {
    const self: CachedBaseWebService<T> = this;

    return this.$http.post(`${this.baseUrl}`, obj)
      .toPromise()
      .then((response) => {
        const data: T = response.json();
        self.allData.push(data);
        self.subject.next(data);

        return data;
      })
      .catch(this.handleError);
  }

  update(id: number, obj: T): Promise<T> {
    const self: CachedBaseWebService<T> = this;

    return this.$http.put(`${this.baseUrl}`, obj)
      .toPromise()
      .then((response) => {
        const data: T = response.json();
        self.allData.forEach((element, index) => {
          if (element.id === id) {
            Object.assign(element, data);
          }
        });
        self.subject.next(data);

        return data;
      })
      .catch(this.handleError);
  }

  search(criteria: string): Observable<T[]> {
    return this.$http.get(`${this.baseUrl}?${criteria}`)
      .map((response) => response.json().data as T[]);
  }

  getObserableData(): Observable<T> {
    return this.subject.asObservable();
  }

  private handleError(reason: IErrorResponse): Promise<any> {
    console.error('An error occurred', reason); // For demo purposes only

    return Promise.reject(reason.message || reason);
  }
}
