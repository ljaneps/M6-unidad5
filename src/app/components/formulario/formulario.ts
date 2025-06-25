import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss'
})
export class Formulario {

  form : FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialogRef<Formulario>, private router: Router) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      direccion: ['', Validators.required],
    });
  }

  enviar() {
    if (this.form.valid) {
      this.dialog.close(this.form.value);
    } else {
      this.form.markAllAsTouched();
      this.router.navigate(['/']);
    }
  }

  cancelar() {
    this.dialog.close();
    this.router.navigate(['/']);
  }

}
