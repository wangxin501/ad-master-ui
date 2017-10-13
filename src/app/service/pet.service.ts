import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IPet } from 'src/app/model';
import { BaseWebService } from './base.service';

@Injectable()
export class PetWebService extends BaseWebService<IPet> {

    constructor(public $http: Http) {
        super($http, 'http://petstore.swagger.io/v2/pet');
    }

}
