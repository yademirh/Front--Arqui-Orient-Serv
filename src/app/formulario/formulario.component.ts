import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  // constructor(private fm : FormBuilder){}  Version vieja  
  private fm = inject(FormBuilder); // Version nueva

  // nombre = new FormControl("", Validators.required);
  // correo = new FormControl("", [Validators.required, Validators.email, Validators.pattern("")]);

  // formulario = new FormGroup(
  //   {
  //     nombre : new FormControl("", Validators.required),
  //     correo : new FormControl("", [Validators.required, Validators.email])
  //   }
  // )

  formulario = this.fm.group(
    {
      nombre : ["", Validators.required],
      correo : ["", [Validators.required, Validators.email]],
      nuevo : this.fm.group({
        edad : ["", Validators.required]
      })
    }
  )

  get nombre(){
    return this.formulario.get('nombre') as FormControl
  }
  get correo(){
    return this.formulario.get('correo') as FormControl
  }

  enviar(){
    console.log(
      this.formulario.value
    );
  }

}
