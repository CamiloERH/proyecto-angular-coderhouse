import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    formulario!: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {}

    ngOnInit(): void {
        this.formulario = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    validarCampos(campo: string) {
        return (
            this.formulario.controls[campo]?.errors &&
            this.formulario.controls[campo]?.touched
        );
    }

    submit() {
        if (this.formulario.invalid) {
            this.formulario.markAllAsTouched();
            return;
        }
        this.router.navigate(['/listado']);
        console.log(this.formulario.value);
    }
}
