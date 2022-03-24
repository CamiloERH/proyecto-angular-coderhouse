import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

    formulario: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
    });

    constructor( private router: Router ) {

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
		console.log( this.formulario.value );
	}
	
}
