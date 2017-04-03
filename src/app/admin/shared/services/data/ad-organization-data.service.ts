import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../../../../environments/environment';
import { AdOrganizationModel } from '../../models/ad-organization.model';

@Injectable()
export class AdOrganizationDataService {
    constructor(private _http: Http) {
    }

    getOrganizations(): Observable<AdOrganizationModel[]> {
        return this._http
            .get(environment.apiUrl + 'organizations', { headers: this.getHeaders() })
            .map((response: Response) => response.json().map(toOrganization))
            .catch(this.handleGetOrganizations);
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    private handleGetOrganizations(error: any) {
        console.log(error);
        return Observable.throw('Getting organizations was not successful.');
    }
}

function toOrganization(record: any): AdOrganizationModel {
    return {
        id: record._id,
        name: record.name,
        address: 'sample',
        description: record.description
    }
}


