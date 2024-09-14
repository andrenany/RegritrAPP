import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const group = control as FormGroup;
    const newPassword = group.get('new_password');
    const confirmPassword = group.get('confirm_password');

    if (newPassword && confirmPassword && newPassword.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  };
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  showPasswordFields: boolean = false;

  constructor(
    private fb: FormBuilder,
    public alertController: AlertController,
    private modalController: ModalController
  ) {
    this.resetForm = this.fb.group({
      username: ['', Validators.required],
      new_password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', [Validators.required, Validators.minLength(8)]]
    }, { validators: passwordMatchValidator() });
  }

  ngOnInit() {}

  async verificarUsuario() {
    const username = this.resetForm.get('username')?.value;
    const usuarioString = localStorage.getItem('usuario');

    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      if (usuario.usuario === username) {
        this.showPasswordFields = true;
      } else {
        await this.presentAlert('Usuario no encontrado', 'El usuario ingresado no existe.');
      }
    } else {
      await this.presentAlert('Error', 'No hay usuarios registrados');
    }
  }

<<<<<<< HEAD
  navigateTologin() {
    this.router.navigate(['/login']); // Navegamos hacia la página del login
    
  }

  async guardarNuevaPassword() {
    const f = this.resetForm.value;
=======
  async onSubmit() {
    if (this.resetForm.valid) {
      const formValues = this.resetForm.value;
      const usuarioString = localStorage.getItem('usuario');
>>>>>>> eb9c9a25cd4570e35d2333549dadd7f51cd764b9

      if (usuarioString) {
        let usuario = JSON.parse(usuarioString);
        usuario.password = formValues.new_password;
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
    this.modalController.dismiss();
  }
}