import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { FormModalService } from '../../services/form-modal.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  hidden: boolean = false;
  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.minLength(3), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    telefone: ['', [Validators.required]],
  });

  isSubmmited: boolean = false
  constructor(public _modalService: FormModalService, private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  get formControls() {
    return this.form.controls;
  }

  hasEmailError: boolean = false;
  submitSucess: boolean = !!localStorage.getItem('submitSucess') ?? false;

  submit() {
    this.isSubmmited = true;
    if (this.form.valid) {
      this.form.disable()
      this._modalService.createUser(this.form.value)

        .subscribe(res => {
          this.submitSucess = true
          localStorage.setItem('submitSucess', 'true')
        },
          (err) => {
            if (err.error) {
              this.hasEmailError = true;
              this.form.enable()
            }
          })
    }
  }

}
