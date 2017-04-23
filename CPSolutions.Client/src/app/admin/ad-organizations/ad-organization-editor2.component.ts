import { Input, Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdOrganizationModel } from '../shared/models/ad-organization.model';
import { AdOrganizationDataService } from '../shared/services/data/ad-organization-data.service';

@Component({
    selector: 'cps-ad-organization-editor2',
    templateUrl: './ad-organization-editor2.component.html',
    styleUrls: ['./ad-organization-editor2.component.less']
})
export class AdOrganizationEditor2Component implements OnInit, OnChanges {
    @Input() organization: AdOrganizationModel;
    editorForm: FormGroup;

    constructor(private fb: FormBuilder,
        private _adOrganizationDataService: AdOrganizationDataService) {
        this.createForm();
    }

    ngOnInit() {
        console.log(this.organization);
    }

    ngOnChanges() {
        if (this.organization === null) {
            this.editorForm.setValue({
                id: '',
                name: '',
                address: '',
                description: ''
            });
        }
        else {
            this.editorForm.setValue({
                id: this.organization.id,
                name: this.organization.name,
                address: this.organization.address,
                description: this.organization.description
            });
        }
    }

    createForm() {
        this.editorForm = this.fb.group({
            id: '',
            name: ['', Validators.required],
            address: '',
            description: ''
        });
    }

    save() {
        let id: string = this.editorForm.get('id').value;
        console.log(id);
        //return;
        if (id) {
            this.update();
        } else {
            this.create();
        }
    }

    private update() {
        let updatingOrganization = this.buildServerModel(this.editorForm.value);
        updatingOrganization._id = this.editorForm.value.id;
        console.log(updatingOrganization);
        this._adOrganizationDataService.updateOrganization(updatingOrganization);
    }

    private buildServerModel(formValue) {
        return {
            _id: null,
            name: formValue.name,
            address: formValue.address,
            description: formValue.description
        };
    }

    private create() {
        console.log(this.editorForm.value);
    }
}
