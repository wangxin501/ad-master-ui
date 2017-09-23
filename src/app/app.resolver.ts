import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DataResolver implements Resolve<IResovedData> {
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IResovedData> {
    return Observable.of({ res: 'I am data'});
  }
}

/**
 * An array of services to resolve routes with data.
 */
export const APP_RESOLVER_PROVIDERS: any = [
  DataResolver
];

export interface IResovedData {
  res: string;
}
