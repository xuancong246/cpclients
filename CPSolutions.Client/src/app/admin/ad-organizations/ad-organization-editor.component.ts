import { Input, Output, Component, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdOrganizationModel } from '../shared/models/ad-organization.model';
import { AdOrganizationDataService } from '../shared/services/data/ad-organization-data.service';

@Component({
    selector: 'cps-ad-organization-editor',
    templateUrl: './ad-organization-editor.component.html',
    styleUrls: ['./ad-organization-editor.component.less']
})
export class AdOrganizationEditorComponent implements OnInit, OnChanges {
    @Input() organization: AdOrganizationModel;
    @Output() cancelEditor = new EventEmitter();
    editorForm: FormGroup;

    constructor(private fb: FormBuilder,
        private _adOrganizationDataService: AdOrganizationDataService) {
        this.createForm();
    }

    ngOnInit() {
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
        if (id) {
            this.update();
        } else {
            this.create();
        }
    }

    private update() {
        let updatingOrganization = this.buildServerModel(this.editorForm.value);
        updatingOrganization.id = this.editorForm.value.id;
        this._adOrganizationDataService.updateOrganization(updatingOrganization).subscribe(
            data => {
                console.log(data);
            }, error => {
                console.log(error);
            }
        );
    }

    private buildServerModel(formValue) {
        return {
            id: null,
            name: formValue.name,
            address: formValue.address,
            description: formValue.description
        };
    }

    private create() {
        let newOrganization = this.buildServerModel(this.editorForm.value);
        this._adOrganizationDataService.addOrganization(newOrganization).subscribe(
            data => {
                console.log(data);
            }, error => {
                console.log(error);
            }
        );
    }

    cancel() {
        this.cancelEditor.emit();
    }
}
