import * as angular from 'angular';

export class AppUtil {

    static isUndefinedOrNull(o: any): boolean {
        return angular.isUndefined(o) || o === null;
    };

}
