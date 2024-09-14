import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  usuarioVerificado: boolean = false;

  constructor(
    private modalController: ModalController,
    private router: Router,
    private fb: FormBuilder,
    public alertController: AlertController
  ) {
    this.resetForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      nuevaPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmacionPassword: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit() {}

  async verificarUsuario() {
    const f = this.resetForm.value;
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario') || '{}');

    if (usuarioGuardado && f.usuario === usuarioGuardado.usuario) {
      this.usuarioVerificado = true;

      const successAlert = await this.alertController.create({
        header: 'Usuario verificado',
        message: 'El usuario ha sido verificado correctamente.',
        buttons: ['Aceptar']
      });

      await successAlert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario no encontrado o incorrecto.',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }

  async guardarNuevaPassword() {
    const f = this.resetForm.value;
  
    if (this.resetForm.valid) {
      const usuarioString = localStorage.getItem('usuario');
  
      if (usuarioString) {
        let usuario = JSON.parse(usuarioString);
        usuario.password = f.nuevaPassword;  // Usamos el valor de la nueva contraseña ingresada
        localStorage.setItem('usuario', JSON.stringify(usuario));
  
        await this.presentAlert('Éxito', 'La contraseña ha sido actualizada correctamente.');
        this.dismissModal();
      } else {
        await this.presentAlert('Error', 'No se pudo actualizar la contraseña.');
      }
    } else {
      await this.presentAlert('Formulario inválido', 'Por favor, complete todos los campos correctamente.');
    }
  }
  
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Aceptar']
    });
  
    await alert.present();
  }
  
  dismissModal() {
    // Cerrar el modal
    this.modalController.dismiss();
  }
  
}
