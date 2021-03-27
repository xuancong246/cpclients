import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse/*, HttpRequestOptions*/ } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { AdOrganizationModel } from '../../models/ad-organization.model';

@Injectable()
export class AdOrganizationDataService {
    constructor(private _http: HttpClient) {
    }

    getOrganizations(): any { //Observable<AdOrganizationModel[]>
        return this._http
            .get(environment.apiUrl + 'organizations', { responseType: 'json' });
        //    .subscribe(
        //        (response: Response) => response.json().map(toOrganization),
        //        () => this.handleGetOrganizations
        //    );
    }

    private getHeaders() {
        let headers = new Headers();
        // headers.append('Accept', 'application/json');
        return headers;
    }

    private handleGetOrganizations(error: any) {
        console.log(error);
        return Observable.throw('Getting organizations was not successful.');
    }

    addOrganization(organization: any) {
        return null;
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        // return this._http
        //     .post(environment.apiUrl + 'organizations', JSON.stringify(organization), options);
    }

    updateOrganization(organization: any) {
        return null;
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        // return this._http
        //     .put(environment.apiUrl + 'organizations/' + organization.id, JSON.stringify(organization), options);
    }
}

function toOrganization(record: any): AdOrganizationModel {
    return {
        id: record.id,
        name: record.name,
        address: record.address,
        description: record.description
    };
}
