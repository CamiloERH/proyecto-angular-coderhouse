import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
   
    formulario!: FormGroup;
    
    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.formulario = this.fb.group({
            nombre: ['', [Validators.required]],
            apellido: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            passwordConfirm: ['', [Validators.required]],
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
        console.log(this.formulario.value);
    }
}
