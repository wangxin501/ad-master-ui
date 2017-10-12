import { Injectable, Provider } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

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
