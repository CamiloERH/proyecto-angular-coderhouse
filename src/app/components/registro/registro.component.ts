import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

	formulario: FormGroup = new FormGroup({
        nombre: new FormControl('', [Validators.required]),
		apellido: new FormControl('',[Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required]),
		passwordConfirm: new FormControl('', [Validators.required]),
    });

	validarCampos(campo: string) {
        return (
            this.formulario.controls[campo]?.errors &&
            this.formulario.controls[campo]?.touched
        );
    }


}
