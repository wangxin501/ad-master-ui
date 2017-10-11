import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IPet } from 'src/app/domain/pet';
import { CachedBaseWebService, IBaseDomain } from 'src/app/webservice/base.webservice';

@Injectable()
export class PetWebService extends CachedBaseWebService<IPet> {

    constructor(public $http: Http) {
        super($http, 'http://petstore.swagger.io/v2/pet');
    }

}
